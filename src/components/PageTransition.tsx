import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -15 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, scale: 1.2, rotate: 10, transition: { duration: 0.6, ease: "easeInOut" } },
};

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
    {children}
  </motion.div>
);

export default PageTransition;
