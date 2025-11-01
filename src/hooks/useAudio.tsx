// utils/useAudioPlayer.ts
import { useRef, useState } from "react";

export function useAudioPlayer() {

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (src: string, isLoop: boolean = true) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(src);
    audio.loop = isLoop
    audio.play();
    setIsPlaying(true)
    audioRef.current = audio;
  };

  const resume = () => {
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true)
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false)
    }
  };

  return { isPlaying, play, resume, stop };
}
