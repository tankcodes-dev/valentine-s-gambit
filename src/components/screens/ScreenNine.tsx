import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import { Mail } from "lucide-react";

interface ScreenProps {
  onNext: () => void;
}

const ScreenNine = ({ onNext }: ScreenProps) => {
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
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Mail className="w-8 h-8 text-valentine-rose" />
        </motion.div>
        <h1 className="valentine-title">
          But if there's even a tiny part of you that's curious…
        </h1>
        <p className="valentine-subtitle mt-4 text-xl">
          …I'd love to take you out this Valentine's. 💌
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary">
          I'm thinking
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="no" wiggle>
          No
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenNine;