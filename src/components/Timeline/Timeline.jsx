import "./Timeline.css";
import timeline from "../../data/timeline";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <h2>Musical Journey</h2>

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}