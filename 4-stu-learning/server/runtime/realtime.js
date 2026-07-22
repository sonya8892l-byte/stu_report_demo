export function createRealtimeHub() {
  const clients = new Map();

  function subscribe(runId, socket) {
    const set = clients.get(runId) || new Set();
    set.add(socket);
    clients.set(runId, set);
    return () => {
      set.delete(socket);
      if (!set.size) clients.delete(runId);
    };
  }

  function publish(runId, event) {
    const payload = JSON.stringify(event);
    for (const socket of clients.get(runId) || []) {
      if (socket.readyState === 1) socket.send(payload);
    }
  }

  return { publish, subscribe };
}
