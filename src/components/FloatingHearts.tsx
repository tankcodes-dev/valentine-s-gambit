import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

interface FloatingHeartsProps {
  intensity?: "light" | "medium" | "heavy";
}

const FloatingHearts = ({ intensity = "light" }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const countMap = { light: 6, medium: 12, heavy: 20 };
  const count = countMap[intensity];

  useEffect(() => {
    const newHearts: FloatingHeart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 4,
      size: 12 + Math.random() * 16,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: `${heart.x}%` }}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: 360,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart
            size={heart.size}
            className="text-valentine-rose fill-valentine-rose"
            style={{ opacity: heart.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;