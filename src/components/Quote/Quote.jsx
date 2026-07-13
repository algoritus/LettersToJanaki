import { motion } from "framer-motion";
import "./Quote.css";

export default function Quote() {
  return (
    <section className="quote-section">

      <motion.div
        className="quote-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <span className="quote-icon">❝</span>

        <h2>
          Music never dies.
          <br />
          It lives inside every heart it touched.
        </h2>

        <p>
          Celebrating the timeless voice of Janaki Amma
        </p>

      </motion.div>

    </section>
  );
}