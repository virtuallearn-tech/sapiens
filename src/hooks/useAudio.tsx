// utils/useAudioPlayer.ts
import { useRef } from "react";

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (src: string, isLoop: boolean = true) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(src);
    audio.loop = isLoop
    audio.play();

    audioRef.current = audio;
  };

  const resume = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { play, resume, stop };
}
