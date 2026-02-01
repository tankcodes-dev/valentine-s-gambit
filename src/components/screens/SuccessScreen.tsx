import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const SuccessScreen = () => {
  useEffect(() => {
    // Initial burst
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const colors = ['#ec4899', '#f43f5e', '#f97316', '#fbbf24', '#a855f7'];

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    // Big initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });

    frame();

    // Heart shapes
    const heartShape = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    });

    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.5 },
        shapes: [heartShape],
        colors: ['#ec4899', '#f43f5e'],
        scalar: 2,
      });
    }, 500);
  }, []);

  return (
    <motion.div
      className="valentine-card overflow-visible"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <motion.div
        className="flex justify-center gap-2 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [-10, 10, -10] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <Heart className="w-10 h-10 text-valentine-deep fill-valentine-deep" />
        </motion.div>
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <Sparkles className="w-10 h-10 text-valentine-gold" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [10, -10, 10] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <Heart className="w-10 h-10 text-valentine-rose fill-valentine-rose" />
        </motion.div>
      </motion.div>

      <motion.h1
        className="valentine-title text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I'm smiling like an idiot right now.
      </motion.h1>
      
      <motion.p
        className="valentine-subtitle text-2xl mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        It's a date 💕
      </motion.p>

      <motion.p
        className="text-muted-foreground mt-8 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Screenshot this — I'll take care of the rest.
      </motion.p>
    </motion.div>
  );
};

export default SuccessScreen;