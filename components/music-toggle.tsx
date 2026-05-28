"use client";

import { useRef, useState } from "react";

import {
  Volume2,
  VolumeX
} from "lucide-react";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    try {
      if (!audioRef.current) return;

      if (playing) {
        audioRef.current.pause();

        setPlaying(false);
      } else {
        await audioRef.current.play();

        setPlaying(true);
      }
    } catch (error) {
      console.error("Music error:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/music/wedding-song.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleMusic}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10"
      >
        {playing ? (
          <Volume2 className="h-4 w-4" />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </button>
    </>
  );
}