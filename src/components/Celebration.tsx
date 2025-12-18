import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface CelebrationProps {
  onComplete: () => void;
}

export function Celebration({ onComplete }: CelebrationProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number }>>([]);

  useEffect(() => {
    const colors = ['#00629B', '#0A7EBF', '#FFD700', '#FF6B35', '#4ECDC4'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full h-full">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full animate-ping"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: '1s'
            }}
          />
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 animate-bounce">
            <Sparkles className="w-24 h-24 text-yellow-400 mx-auto" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Congratulations! 🎉
            </h1>
            <p className="text-xl md:text-2xl text-blue-300">
              Revealing the positions of selected members...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
