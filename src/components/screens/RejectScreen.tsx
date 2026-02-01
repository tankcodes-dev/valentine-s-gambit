import { motion } from "framer-motion";
import { Heart } from "lucide-react";

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
        <Heart className="w-10 h-10 text-valentine-rose/60" />
      </motion.div>

      <motion.h1
        className="valentine-title text-2xl md:text-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I understand, and I respect that.
      </motion.h1>
      
      <motion.p
        className="valentine-subtitle text-lg mt-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Some feelings are worth expressing, even if the answer isn't what we hoped for.
      </motion.p>

      <motion.p
        className="text-valentine-text/80 text-base mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Thank you for being honest with me. 
        <br />
        You deserve someone who makes your heart say yes without hesitation.
      </motion.p>

      <motion.p
        className="text-valentine-rose mt-6 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Wishing you all the love in the world. 💕
      </motion.p>
    </motion.div>
  );
};

export default RejectScreen;