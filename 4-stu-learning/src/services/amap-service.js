const AMAP_KEY = String(import.meta.env.VITE_AMAP_KEY || '').trim();
const AMAP_SECURITY_CODE = String(import.meta.env.VITE_AMAP_SECURITY_CODE || '').trim();
const AMAP_STYLE = String(import.meta.env.VITE_AMAP_STYLE || '').trim() || 'amap://styles/normal';

let loaderPromise = null;

function loadAmap() {
  if (window.AMap) return Promise.resolve(window.AMap);
  if (!AMAP_KEY) return Promise.reject(new Error('高德地图 Key 尚未配置'));
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    if (AMAP_SECURITY_CODE) window._AMapSecurityConfig = { securityJsCode: AMAP_SECURITY_CODE };
    const callbackName = `__stuAmapReady_${Date.now()}`;
    const script = document.createElement('script');
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('高德地图加载超时'));
    }, 10_000);
    const cleanup = () => {
      window.clearTimeout(timer);
      delete window[callbackName];
      script.onerror = null;
    };
    window[callbackName] = () => {
      cleanup();
      if (window.AMap) resolve(window.AMap);
      else reject(new Error('高德地图初始化失败'));
    };
    script.onerror = () => {
      cleanup();
      loaderPromise = null;
      reject(new Error('高德地图资源加载失败'));
    };
    script.async = true;
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(AMAP_KEY)}&plugin=AMap.ToolBar,AMap.Scale,AMap.PlaceSearch&callback=${callbackName}`;
    document.head.appendChild(script);
  });
  return loaderPromise;
}

function validCoordinates(value) {
  if (!Array.isArray(value) || value.length < 2) return null;
  const coordinates = value.slice(0, 2).map(Number);
  return coordinates.every(Number.isFinite) ? coordinates : null;
}

function placeSearch(AMap, keyword) {
  return new Promise((resolve) => {
    if (!keyword) return resolve(null);
    AMap.plugin('AMap.PlaceSearch', () => {
      const search = new AMap.PlaceSearch({ city: '北京', citylimit: false, pageSize: 1 });
      search.search(keyword, (status, result) => {
        const location = status === 'complete' ? result?.poiList?.pois?.[0]?.location : null;
        resolve(location ? [location.lng, location.lat] : null);
      });
    });
  });
}

async function resolveCenter(AMap, { coordinates, location, venue }) {
  const configured = validCoordinates(coordinates);
  if (configured) return configured;
  return await placeSearch(AMap, `${venue || ''} ${location || ''}`.trim())
    || await placeSearch(AMap, venue)
    || null;
}

export async function mountAmapNavigation(container, options = {}) {
  if (!container?.isConnected) return null;
  container.dataset.mapStatus = 'loading';
  try {
    const AMap = await loadAmap();
    const center = await resolveCenter(AMap, options);
    if (!container.isConnected) return null;
    if (!center) throw new Error('课程地点缺少可识别的坐标');
    container.replaceChildren();
    const map = new AMap.Map(container, {
      center,
      zoom: 17,
      mapStyle: AMAP_STYLE,
      viewMode: '2D',
      features: ['bg', 'road', 'point'],
      showLabel: true,
      dragEnable: true,
      zoomEnable: true,
    });
    const marker = new AMap.Marker({
      position: center,
      title: options.location || '任务地点',
      anchor: 'bottom-center',
    });
    map.add(marker);
    const radius = Number(options.radiusMeters);
    if (Number.isFinite(radius) && radius > 0) {
      map.add(new AMap.Circle({
        center,
        radius,
        strokeColor: '#9f211b',
        strokeOpacity: 0.72,
        strokeWeight: 2,
        fillColor: '#9f211b',
        fillOpacity: 0.08,
      }));
    }
    map.addControl(new AMap.Scale({ position: 'LB' }));
    container.dataset.mapStatus = 'ready';
    container.dataset.longitude = String(center[0]);
    container.dataset.latitude = String(center[1]);
    return map;
  } catch (error) {
    if (container?.isConnected) {
      container.dataset.mapStatus = 'error';
      const fallback = document.createElement('div');
      fallback.className = 'amap-navigation__fallback';
      const title = document.createElement('strong');
      title.textContent = '高德地图暂未加载';
      const detail = document.createElement('span');
      detail.textContent = String(error.message || '请检查网络后重试');
      fallback.append(title, detail);
      container.replaceChildren(fallback);
    }
    return null;
  }
}

export function openAmapNavigation({ coordinates, location, venue }) {
  const point = validCoordinates(coordinates);
  const destination = point ? `${point[0]},${point[1]},${location || '任务地点'}` : '';
  const query = new URLSearchParams({
    to: destination,
    toname: location || venue || '任务地点',
    mode: 'walk',
    policy: '1',
    src: '研学智能体学生端',
    coordinate: 'gaode',
    callnative: '1',
  });
  if (!destination) query.set('keyword', `${venue || ''} ${location || ''}`.trim());
  const url = destination
    ? `https://uri.amap.com/navigation?${query}`
    : `https://uri.amap.com/search?${query}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
