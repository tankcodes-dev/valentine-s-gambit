import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const RejectScreen = () => {
  return (
    <motion.div
      className="valentine-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Sparkles className="w-10 h-10 text-valentine-gold" />
      </motion.div>

      <motion.h1
        className="valentine-title text-2xl md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Thank you for being honest.
      </motion.h1>
      
      <motion.p
        className="valentine-subtitle text-xl mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You're still amazing — truly. ✨
      </motion.p>
    </motion.div>
  );
};

export default RejectScreen;