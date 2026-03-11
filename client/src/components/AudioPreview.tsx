import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

/**
 * A sleek inline audio player for previewing a music sample. Shows a
 * play/pause button, a progress bar, and a volume icon. Designed to
 * fit the dark luxury aesthetic.
 */
export function AudioPreview({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  }

  function onTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  }

  function onEnded() {
    setPlaying(false);
    setProgress(0);
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  }

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause audio preview" : "Play audio preview"}
        className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
      >
        {playing ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </button>
      <div
        className="w-32 h-1.5 bg-border rounded-full cursor-pointer relative overflow-hidden"
        onClick={seek}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 left-0 bg-accent rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <Volume2 className="w-4 h-4 text-accent/60" aria-hidden="true" />
    </div>
  );
}
