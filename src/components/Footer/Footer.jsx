import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>
          Letters to Janaki
        </h2>

        <p className="footer-message">
          An unofficial fan tribute created with love and respect.
        </p>

        <p className="copyright">
          All copyrights belong to their respective owners.
        </p>

        <div className="footer-line"></div>

        <p className="created">
          Designed & Developed by
          <span> Algoritus</span>
        </p>

        <p className="made">
          Built with ❤️ to preserve timeless musical memories.
        </p>

      </motion.div>

    </footer>
  );
}