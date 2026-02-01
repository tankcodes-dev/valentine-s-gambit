import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";
import { Sparkles } from "lucide-react";

interface ScreenProps {
  onNext: () => void;
}

const ScreenSeven = ({ onNext }: ScreenProps) => {
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
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8 text-valentine-gold" />
        </motion.div>
        <h1 className="valentine-title">
          Because some chances don't come twice…
        </h1>
        <p className="valentine-subtitle mt-4">
          and I'd regret not asking you properly.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary">
          Okay
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="secondary">
          You're annoying
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenSeven;