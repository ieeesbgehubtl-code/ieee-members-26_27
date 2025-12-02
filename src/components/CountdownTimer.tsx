import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  onComplete: () => void;
}

export function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center gap-3 text-blue-400">
        <Clock className="w-8 h-8 animate-pulse" />
        <h2 className="text-2xl md:text-3xl font-bold">Reveal in</h2>
      </div>

      <div className="grid grid-cols-4 gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 md:p-6 shadow-xl border-2 border-blue-400 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.days}</div>
          </div>
          <div className="text-sm md:text-base text-gray-400 mt-2 font-medium">Days</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 md:p-6 shadow-xl border-2 border-blue-400 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.hours}</div>
          </div>
          <div className="text-sm md:text-base text-gray-400 mt-2 font-medium">Hours</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 md:p-6 shadow-xl border-2 border-blue-400 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.minutes}</div>
          </div>
          <div className="text-sm md:text-base text-gray-400 mt-2 font-medium">Minutes</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-4 md:p-6 shadow-xl border-2 border-blue-400 min-w-[70px] md:min-w-[100px]">
            <div className="text-3xl md:text-5xl font-bold text-white">{timeLeft.seconds}</div>
          </div>
          <div className="text-sm md:text-base text-gray-400 mt-2 font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
}
