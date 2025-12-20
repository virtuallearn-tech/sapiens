const DB_NAME = "models-cache";
const STORE = "models";

function getDB(): Promise<IDBDatabase> {
  return new Promise((resolve) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
  });
}

export async function saveModelToIDB(key: string, data: ArrayBuffer) {
  const db = await getDB();
  const tx = db.transaction(STORE, "readwrite");
  tx.objectStore(STORE).put(data, key);
}

export async function loadModelFromIDB(key: string): Promise<ArrayBuffer | null> {
  const db = await getDB();
  return new Promise((resolve) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(key);
    req.onsuccess = () => resolve(req.result ?? null);
    req.onerror = () => resolve(null);
  });
}
