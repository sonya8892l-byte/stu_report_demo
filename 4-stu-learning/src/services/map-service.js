let amapPromise;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-amap-sdk="${src}"]`);
    if (existing) {
      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.amapSdk = src;
    script.addEventListener('load', resolve, { once: true });
    script.addEventListener('error', () => reject(new Error('高德地图 SDK 加载失败。')), { once: true });
    document.head.appendChild(script);
  });
}

/**
 * 按需加载高德地图。浏览器端 key 来自本地环境文件，不再写死在页面中。
 */
export function ensureAmap() {
  if (window.AMap) return Promise.resolve(window.AMap);
  if (amapPromise) return amapPromise;

  const key = import.meta.env.VITE_AMAP_KEY;
  const securityCode = import.meta.env.VITE_AMAP_SECURITY_CODE;

  if (!key) return Promise.reject(new Error('缺少 VITE_AMAP_KEY。'));
  if (securityCode) window._AMapSecurityConfig = { securityJsCode: securityCode };

  const src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(key)}`;
  amapPromise = loadScript(src).then(() => window.AMap);
  return amapPromise;
}
