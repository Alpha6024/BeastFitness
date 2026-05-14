import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useFramePreloader } from '../hooks/useFramePreloader';

gsap.registerPlugin(ScrollTrigger);

const CinematicHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { frames, loading, progress } = useFramePreloader(32, 4);

  useEffect(() => {
    if (loading || frames.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const renderFrame = (index) => {
      const frameIndex = Math.min(Math.floor(index), frames.length - 1);
      const img = frames[frameIndex];
      
      if (img) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    renderFrame(0);

    const frameAnimation = { frame: 0 };
    
    gsap.to(frameAnimation, {
      frame: frames.length - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
      onUpdate: () => {
        renderFrame(frameAnimation.frame);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [frames, loading]);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-6xl font-bold gradient-text mb-4"
          >
            BEAST FITNESS
          </motion.div>
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-gray-400 mt-4">{progress}%</p>
          <p className="text-gray-600 text-sm mt-2">Loading cinematic experience...</p>
        </div>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full" style={{ minHeight: '400vh' }}>
      {/* Fixed Canvas */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Sections */}
      <div className="absolute top-0 left-0 w-full" style={{ height: '400vh' }}>
        {/* Section 1 */}
        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-4 md:mb-6 tracking-tighter"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              BEAST FITNESS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg sm:text-xl lg:text-2xl text-white mb-6 md:mb-8 font-light tracking-wide"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              UNLEASH YOUR INNER BEAST
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-btn bg-white text-black px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full"
            >
              START YOUR JOURNEY
            </motion.button>
          </div>
        </div>

        {/* Section 2 */}
        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 
              className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              TRANSFORM
            </h2>
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white font-light"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Your body. Your mind. Your life.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 
              className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              ELITE TRAINING
            </h2>
            <p 
              className="text-lg sm:text-2xl lg:text-3xl text-white font-light mb-6 md:mb-8"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              World-class facilities. Expert trainers. Premium experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-btn bg-white text-black px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full"
            >
              EXPLORE MEMBERSHIP
            </motion.button>
          </div>
        </div>

        {/* Section 4 */}
        <div className="h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h2 
              className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tighter"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
            >
              JOIN THE ELITE
            </h2>
            <p 
              className="text-lg sm:text-2xl lg:text-3xl text-white font-light mb-6 md:mb-8"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Limited memberships available
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="premium-btn bg-white text-black px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full"
            >
              APPLY NOW
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-sm flex flex-col items-center"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          <span className="mb-2">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;
