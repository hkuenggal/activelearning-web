"use client";

import Image from "next/image";
import { useState } from "react";

type ClickToPlayVideoProps = {
  posterUrl: string;
  videoUrl: string;
};

export function ClickToPlayVideo({ posterUrl, videoUrl }: ClickToPlayVideoProps) {
  const [hasStarted, setHasStarted] = useState(false);

  if (hasStarted) {
    return (
      <video className="aspect-video w-full bg-black" controls autoPlay playsInline preload="auto">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support embedded video. <a href={videoUrl}>Open the video directly.</a>
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setHasStarted(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-slate-950 text-white"
      aria-label="Play the Game Rules Introduction video"
    >
      <Image
        src={posterUrl}
        alt="Game Rules Introduction video cover"
        fill
        sizes="(max-width: 768px) 100vw, 1100px"
        className="object-cover transition duration-500 group-hover:scale-[1.015]"
      />
      <span className="absolute inset-0 bg-slate-950/20 transition group-hover:bg-slate-950/10" />
      <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white/90 bg-slate-950/75 shadow-[0_16px_45px_rgba(15,23,42,0.42)] backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-sky-700/90">
        <span className="ml-1 h-0 w-0 border-b-[11px] border-l-[18px] border-t-[11px] border-b-transparent border-l-white border-t-transparent" />
      </span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg">
        Click to load video
      </span>
    </button>
  );
}
