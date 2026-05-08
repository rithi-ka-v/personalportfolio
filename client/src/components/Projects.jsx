import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

import { motion } from "framer-motion";

function Projects() {

  const projects = [

    {
      image: project1,
      title: "Portfolio Website",
      description: "React portfolio website",
      github: "#",
      live: "#"
    },

    {
      image: project2,
      title: "Weather App",
      description: "Weather application",
      github: "#",
      live: "#"
    },

    {
      image: project3,
      title: "Task Manager",
      description: "Task management application",
      github: "#",
      live: "#"
    }

  ];

  return (

    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div

            className="project-card"
            key={index}

            initial={{ opacity: 0, y: 100 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

          >

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-buttons">

              <a href={project.live}>

                <button className="btn">
                  Live Demo
                </button>

              </a>

              <a href={project.github}>

                <button className="btn">
                  GitHub
                </button>

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Projects;