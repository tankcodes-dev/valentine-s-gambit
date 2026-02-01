import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";

interface ScreenProps {
  onNext: () => void;
}

const ScreenThree = ({ onNext }: ScreenProps) => {
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
        <h1 className="valentine-title">
          Quick question —
        </h1>
        <p className="valentine-subtitle mt-4">
          do you believe small moments can turn into favorite memories?
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary">
          Maybe
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="secondary">
          I don't know
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenThree;