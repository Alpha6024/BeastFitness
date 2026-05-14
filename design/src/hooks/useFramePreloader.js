import { useState, useEffect } from 'react';

export const useFramePreloader = (frameCount, startFrame = 4) => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadFrames = async () => {
      const loadedFrames = [];
      let loadedCount = 0;

      const loadPromises = [];

      for (let i = 0; i < frameCount; i++) {
        const frameNumber = startFrame + i;
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedFrames[i] = img;
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
            resolve();
          };
          img.onerror = reject;
          img.src = `/bg/frame-${frameNumber}.png`;
        });
        loadPromises.push(promise);
      }

      try {
        await Promise.all(loadPromises);
        setFrames(loadedFrames);
        setLoading(false);
      } catch (error) {
        console.error('Error loading frames:', error);
        setLoading(false);
      }
    };

    loadFrames();
  }, [frameCount, startFrame]);

  return { frames, loading, progress };
};
