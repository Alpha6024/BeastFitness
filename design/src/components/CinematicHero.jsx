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
        end: '+=300%',
        scrub: 0.5,
        pin: true,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="text-center w-full max-w-sm px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold gradient-text mb-4"
          >
            BEAST FITNESS
          </motion.div>
          <div className="w-full max-w-xs h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-white"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">{progress}%</p>
          <p className="text-gray-600 text-xs sm:text-sm mt-2">Loading cinematic experience...</p>
        </div>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative h-full flex items-center justify-center px-4 w-full" style={{ zIndex: 10 }}>
        <div className="text-center max-w-5xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            BEAST FITNESS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 font-light tracking-wide"
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
            className="premium-btn bg-white text-black px-6 sm:px-10 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full"
          >
            START YOUR JOURNEY
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        style={{ zIndex: 20 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-sm flex flex-col items-center"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          <span className="mb-2 font-medium">SCROLL</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;
