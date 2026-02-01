import { useState } from "react";
import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import { Heart } from "lucide-react";

interface ScreenProps {
  onYes: () => void;
  onNo: () => void;
}

const followUpTexts = [
  "Wait… are you sure? 🥺",
  "Really? Not even a tiny chance? 💔",
  "Okay okay… last time I'm asking, I promise 🥹",
];

const ScreenTen = ({ onYes, onNo }: ScreenProps) => {
  const [noAttempts, setNoAttempts] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoClick = () => {
    if (noAttempts < 3) {
      // Move button to random position
      const newX = (Math.random() - 0.5) * 150;
      const newY = (Math.random() - 0.5) * 80;
      setButtonPosition({ x: newX, y: newY });
      setNoAttempts((prev) => prev + 1);
    } else {
      // After 3 attempts, actually allow the no
      onNo();
    }
  };

  return (
    <motion.div
      className="valentine-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <motion.div
          className="flex justify-center mb-6"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Heart className="w-12 h-12 text-valentine-deep fill-valentine-deep" />
        </motion.div>
        <h1 className="valentine-title text-3xl md:text-4xl">
          So tell me —
        </h1>
        <p className="valentine-subtitle mt-4 text-2xl">
          would you go on a Valentine date with me? 💖
        </p>

        {/* Follow-up text when clicking No */}
        {noAttempts > 0 && noAttempts <= 3 && (
          <motion.p
            key={noAttempts}
            className="text-valentine-rose mt-4 text-lg font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {followUpTexts[noAttempts - 1]}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onYes} variant="yes" wiggle={noAttempts >= 2}>
          Yes
        </ValentineButton>
        <motion.div
          animate={{ x: buttonPosition.x, y: buttonPosition.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ValentineButton onClick={handleNoClick} variant="no">
            {noAttempts >= 3 ? "No (for real)" : "No"}
          </ValentineButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScreenTen;