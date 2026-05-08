import { motion } from "framer-motion";

function About() {

  return (

    <motion.section

      id="about"
      className="about"

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

    >

      <h2>About Me</h2>

      <p>
        I am a B.Tech Information Technology student
        passionate about full-stack web development.
        I enjoy creating modern responsive web
        applications and improving my development skills.
      </p>

    </motion.section>

  );
}

export default About;