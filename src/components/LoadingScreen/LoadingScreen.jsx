import { motion } from "framer-motion";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
    >
      <motion.div
        className="loading-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="heart">❤️</div>

        <h1>Letters to Janaki</h1>

        <p>
          Every song holds a memory.
        </p>

        <div className="loader-line">
          <span></span>
        </div>
      </motion.div>
    </motion.div>
  );
}