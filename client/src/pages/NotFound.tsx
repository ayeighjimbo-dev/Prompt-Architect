import { Button } from "@/components/ui/button";
import { Home, Music } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center max-w-lg mx-4">
        <div className="mb-8">
          <Music className="w-16 h-16 text-accent mx-auto mb-4 glow-gold" aria-hidden="true" />
          <h1 className="text-8xl font-display font-bold text-accent glow-gold mb-2">404</h1>
          <h2 className="text-2xl font-display font-semibold text-foreground/80 mb-4">
            Page Not Found
          </h2>
          <p className="text-foreground/60 leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
            Let's get you back to the music.
          </p>
        </div>

        <Button
          onClick={() => setLocation("/")}
          className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-105 px-8 py-3"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Button>
      </div>
    </div>
  );
}
