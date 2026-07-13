import { motion } from "framer-motion";
import "./WorldMap.css";

const countries = [
  {
    name: "India",
    letters: 120,
    x: "55%",
    y: "48%"
  },
  {
    name: "USA",
    letters: 35,
    x: "20%",
    y: "42%"
  },
  {
    name: "UK",
    letters: 18,
    x: "45%",
    y: "35%"
  },
  {
    name: "Singapore",
    letters: 22,
    x: "72%",
    y: "65%"
  },
  {
    name: "Malaysia",
    letters: 15,
    x: "70%",
    y: "62%"
  },
  {
    name: "UAE",
    letters: 20,
    x: "58%",
    y: "55%"
  }
];


export default function WorldMap() {

  return (

    <section className="world-section">

      <motion.div
        className="world-title"
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >

        <h2>
          Memories Around The World
        </h2>

        <p>
          Janaki Amma's voice touched hearts across countries.
        </p>

      </motion.div>


      <div className="map-container">

        <div className="map-shape">

          {
            countries.map((country,index)=>(

              <motion.div
                key={index}
                className="map-dot"
                style={{
                  left:country.x,
                  top:country.y
                }}

                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{
                  delay:index*0.15
                }}

              >

                <span></span>

                <div className="tooltip">

                  <strong>
                    {country.name}
                  </strong>

                  <br/>

                  {country.letters} Letters

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>

    </section>

  );
}