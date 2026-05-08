import profile from "../assets/profile.jpg";
import { motion } from "framer-motion";

function Hero() {

  return (

    <section id="home" className="hero">

      <motion.div
        className="hero-content"

        initial={{ opacity: 0, x: -100 }}

        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: 1 }}
      >

        <h1>
          Hi, I'm <span>Rithika V</span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p>
          Passionate Full Stack Developer skilled in
          React.js, Node.js, MongoDB, and Express.js.
        </p>

        <a href="#projects">

          <button className="btn">
            View Projects
          </button>

        </a>

      </motion.div>

      <motion.div
        className="hero-image"

        initial={{ opacity: 0, x: 100 }}

        animate={{ opacity: 1, x: 0 }}

        transition={{ duration: 1 }}
      >

        <img src={profile} alt="Rithika" />

      </motion.div>

    </section>

  );
}

export default Hero;