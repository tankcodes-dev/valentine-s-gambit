import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ValentineButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "yes" | "no";
  wiggle?: boolean;
  className?: string;
}

const ValentineButton = ({
  children,
  onClick,
  variant = "primary",
  wiggle = false,
  className,
}: ValentineButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-medium text-base transition-all duration-300 cursor-pointer border-2";

  const variants = {
    primary:
      "bg-primary text-primary-foreground border-primary hover:bg-valentine-deep hover:border-valentine-deep shadow-romantic",
    secondary:
      "bg-valentine-cream text-valentine-text border-valentine-rose/30 hover:bg-valentine-blush hover:border-valentine-rose",
    yes: "bg-gradient-to-r from-valentine-rose to-valentine-deep text-primary-foreground border-transparent hover:shadow-glow shadow-romantic",
    no: "bg-valentine-cream text-valentine-text border-valentine-rose/20 hover:bg-valentine-blush hover:border-valentine-rose/40",
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      animate={wiggle ? { rotate: [-3, 3, -3, 3, 0] } : {}}
      transition={
        wiggle
          ? { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
          : { type: "spring", stiffness: 400, damping: 17 }
      }
    >
      {children}
    </motion.button>
  );
};

export default ValentineButton;