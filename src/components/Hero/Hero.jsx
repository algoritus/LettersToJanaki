import "./Hero.css";
import { motion } from "framer-motion";
import janaki from "../../assets/janaki.png";

export default function Hero() {

  return (
    <section className="hero">

      <img
        src={janaki}
        alt="S Janaki"
        className="janaki-bg"
      />

      <div className="hero-overlay"></div>


      <div className="hero-content">


        <motion.h1
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
        >
          Letters to Janaki
        </motion.h1>


        <motion.p
          className="hero-subtitle"
          initial={{opacity:0}}
          animate={{opacity:1}}
        >
          More than 48,000 songs.
          <br/>
          Twenty languages.
          <br/>
          One timeless voice.
        </motion.p>


        <div className="hero-buttons">

          <a href="#letter" className="hero-btn primary-btn">
           Write Your Letter
          </a>

          <a href="#timeline" className="hero-btn explore-btn">
            Explore Journey
          </a>

        </div>


      </div>



    </section>
  );
}