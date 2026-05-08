import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB"
  ];

  return (

    <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <motion.div

            className="skill-card"
            key={index}

            initial={{ opacity: 0, scale: 0.5 }}

            whileInView={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.5 }}

          >

            {skill}

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Skills;