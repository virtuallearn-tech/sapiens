//import { useGLTF } from "@react-three/drei";
import { loadModelFromIDB, saveModelToIDB } from "@utils/models-idb";
import { useEffect, useState } from "react";

export function useOfflineGLTF(url: string) {
  const [src, setSrc] = useState<string | null>(null);
  const [isErrored, setErrored] = useState(false);

  useEffect(() => {
    async function load() {
      const isOnline = navigator.onLine;
      const cached = await loadModelFromIDB(url);

      if (cached) {
        const blobURL = URL.createObjectURL(new Blob([cached]));
        setSrc(blobURL);
        return;
      }

      if (!isOnline) {
        setErrored(true);
        return;
      }

      try {
        const res = await fetch(url);
        const arr = await res.arrayBuffer();
        await saveModelToIDB(url, arr);
        const blobURL = URL.createObjectURL(new Blob([arr]));
        setSrc(blobURL);
      } catch {
        setErrored(true);
      }
    }

    load();
  }, [url]);

  return { src, isErrored };
}
