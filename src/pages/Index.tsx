import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ScreenOne from "@/components/screens/ScreenOne";
import ScreenTwo from "@/components/screens/ScreenTwo";
import ScreenThree from "@/components/screens/ScreenThree";
import ScreenFour from "@/components/screens/ScreenFour";
import ScreenFive from "@/components/screens/ScreenFive";
import ScreenSix from "@/components/screens/ScreenSix";
import ScreenSeven from "@/components/screens/ScreenSeven";
import ScreenEight from "@/components/screens/ScreenEight";
import ScreenNine from "@/components/screens/ScreenNine";
import ScreenTen from "@/components/screens/ScreenTen";
import SuccessScreen from "@/components/screens/SuccessScreen";
import RejectScreen from "@/components/screens/RejectScreen";

type ScreenState = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "success" | "reject";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(1);

  const handleNext = () => {
    setCurrentScreen((prev) => {
      if (typeof prev === "number" && prev < 10) {
        return (prev + 1) as ScreenState;
      }
      return prev;
    });
  };

  const handleYes = () => {
    setCurrentScreen("success");
  };

  const handleNo = () => {
    setCurrentScreen("reject");
  };

  // Progressive background warmth based on screen
  const backgroundClass = useMemo(() => {
    if (currentScreen === "success") return "gradient-celebration";
    if (currentScreen === "reject") return "gradient-soft";
    if (typeof currentScreen === "number") {
      if (currentScreen <= 3) return "gradient-soft";
      if (currentScreen <= 5) return "gradient-warm";
      if (currentScreen <= 7) return "gradient-romantic";
      return "gradient-deep";
    }
    return "gradient-soft";
  }, [currentScreen]);

  // Progressive heart intensity
  const heartIntensity = useMemo(() => {
    if (currentScreen === "success") return "heavy";
    if (typeof currentScreen === "number") {
      if (currentScreen <= 4) return "light";
      if (currentScreen <= 7) return "medium";
      return "heavy";
    }
    return "light";
  }, [currentScreen]) as "light" | "medium" | "heavy";

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <ScreenOne onNext={handleNext} />;
      case 2:
        return <ScreenTwo onNext={handleNext} />;
      case 3:
        return <ScreenThree onNext={handleNext} />;
      case 4:
        return <ScreenFour onNext={handleNext} />;
      case 5:
        return <ScreenFive onNext={handleNext} />;
      case 6:
        return <ScreenSix onNext={handleNext} />;
      case 7:
        return <ScreenSeven onNext={handleNext} />;
      case 8:
        return <ScreenEight onNext={handleNext} />;
      case 9:
        return <ScreenNine onNext={handleNext} />;
      case 10:
        return <ScreenTen onYes={handleYes} onNo={handleNo} />;
      case "success":
        return <SuccessScreen />;
      case "reject":
        return <RejectScreen />;
      default:
        return <ScreenOne onNext={handleNext} />;
    }
  };

  return (
    <motion.div
      className={`min-h-screen flex items-center justify-center p-6 transition-all duration-1000 ${backgroundClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <FloatingHearts intensity={heartIntensity} />
      
      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div key={currentScreen}>
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
        
        {/* Progress indicator */}
        {typeof currentScreen === "number" && (
          <motion.div
            className="flex justify-center gap-1.5 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i + 1 <= currentScreen
                    ? "bg-valentine-rose"
                    : "bg-valentine-blush"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Index;