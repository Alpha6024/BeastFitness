import { useState, useEffect } from 'react';

export const useFramePreloader = (frameCount, startFrame = 4) => {
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadFrames = async () => {
      const loadedFrames = [];
      let loadedCount = 0;

      // Load frames in batches for faster loading
      const batchSize = 8;
      
      for (let i = 0; i < frameCount; i += batchSize) {
        const batchPromises = [];
        
        for (let j = 0; j < batchSize && (i + j) < frameCount; j++) {
          const index = i + j;
          const frameNumber = startFrame + index;
          
          const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              loadedFrames[index] = img;
              loadedCount++;
              setProgress(Math.round((loadedCount / frameCount) * 100));
              resolve();
            };
            img.onerror = () => {
              console.warn(`Failed to load frame-${frameNumber}.png`);
              loadedCount++;
              setProgress(Math.round((loadedCount / frameCount) * 100));
              resolve(); // Continue even if one frame fails
            };
            img.src = `/bg/frame-${frameNumber}.png`;
          });
          
          batchPromises.push(promise);
        }
        
        await Promise.all(batchPromises);
      }

      setFrames(loadedFrames.filter(f => f)); // Remove any undefined frames
      setLoading(false);
    };

    loadFrames();
  }, [frameCount, startFrame]);

  return { frames, loading, progress };
};
