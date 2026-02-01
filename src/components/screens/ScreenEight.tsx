import { motion } from "framer-motion";
import ValentineButton from "../ValentineButton";

interface ScreenProps {
  onNext: () => void;
}

const ScreenEight = ({ onNext }: ScreenProps) => {
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
          Even if your answer is no,
        </h1>
        <p className="valentine-subtitle mt-4 text-xl">
          I'd still be glad I asked <span className="italic">you</span>.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ValentineButton onClick={onNext} variant="primary">
          …
        </ValentineButton>
        <ValentineButton onClick={onNext} variant="secondary">
          Why though?
        </ValentineButton>
      </motion.div>
    </motion.div>
  );
};

export default ScreenEight;