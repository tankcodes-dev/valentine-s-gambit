import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import { Heart } from "lucide-react";

interface ScreenProps {
  onNext: () => void;
}

const ScreenFive = ({ onNext }: ScreenProps) => {
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
          className="flex justify-center mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <Heart className="w-8 h-8 text-valentine-rose fill-valentine-rose" />
        </motion.div>
        <h1 className="valentine-title">
          Not gonna lie…
        </h1>
        <p className="valentine-subtitle mt-4">
          I'd feel lucky just sitting across from you.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary">
          That's sweet
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="secondary">
          You're smooth
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenFive;