import { useState, useEffect } from 'react';
import { Users, Zap } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { Celebration } from './Celebration';
import { MembersList } from './MembersList';
import { Footer } from './Footer';

export function HomePage() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [showMembers, setShowMembers] = useState(false);

  const targetDate = new Date('2025-12-02T16:30:00+05:30');
  const celebrationEndDate = new Date('2025-12-02T18:00:00+05:30');

  useEffect(() => {
    const now = new Date();

    if (now >= targetDate && now < celebrationEndDate) {
      setShowCelebration(true);
    } else if (now >= celebrationEndDate) {
      setShowMembers(true);
    }
  }, []);

  const handleTimerComplete = () => {
    setShowCelebration(true);
  };

  const handleCelebrationComplete = () => {
    setShowCelebration(false);
    setShowMembers(true);
  };

  if (showMembers) {
    return (
      <>
        <MembersList />
        <Footer />
      </>
    );
  }

  return (
    <>
      {showCelebration && <Celebration onComplete={handleCelebrationComplete} />}

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col">
        {/* Header with logos */}
        <div className="absolute top-6 left-0 right-0 z-10 bg-transparent">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-6 h-24">
            
            {/* Left Logo */}
            <img 
              src="/assets/gehulogo.svg"
              alt="Graphic Era Hill University Logo"
              className="h-28 md:h-32 w-auto"
            />

            {/* Right Logo */}
            <img 
              src="/assets/ieeesblogo.svg"
              alt="IEEE Student Branch Logo"
              className="h-20 md:h-24 w-auto"
            />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12 pt-24 md:pt-32">
          <div className="max-w-5xl w-full">
            <div className="text-center space-y-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Zap className="w-16 h-16 text-yellow-400 animate-pulse" />
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  IEEE Student Branch
                </h1>

                <p className="text-xl md:text-2xl text-blue-300 font-semibold">
                  Graphic Era Hill University, Bhimtal
                </p>

                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-8 py-4 shadow-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                    <Users className="w-8 h-8" />
                    New Members Reveal
                  </h2>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue-500">
                <CountdownTimer targetDate={targetDate} onComplete={handleTimerComplete} />

                <div className="mt-12 space-y-4">
                  <p className="text-lg md:text-xl text-gray-300">
                    Get ready for something exciting!
                  </p>
                  <p className="text-base md:text-lg text-gray-400">
                    The moment you've been waiting for is almost here...
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-blue-900 bg-opacity-30 rounded-xl p-6 border border-blue-400 hover:bg-opacity-50 transition-all">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Innovation</h3>
                  <p className="text-gray-400">Advancing technology for humanity</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 rounded-xl p-6 border border-blue-400 hover:bg-opacity-50 transition-all">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Learning</h3>
                  <p className="text-gray-400">Continuous growth and development</p>
                </div>
                <div className="bg-blue-900 bg-opacity-30 rounded-xl p-6 border border-blue-400 hover:bg-opacity-50 transition-all">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Community</h3>
                  <p className="text-gray-400">Building connections that matter</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}