import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import { Heart } from "lucide-react";

interface ScreenProps {
  onYes: () => void;
  onNo: () => void;
}

const ScreenTen = ({ onYes, onNo }: ScreenProps) => {
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
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onYes} variant="yes">
          Yes
        </ValentineButton>
        <ValentineButton onClick={onNo} variant="no">
          No
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenTen;