import { motion } from "framer-motion";
import Project from "./Project";

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{ duration: 1.5}}
      id="projects" 
      className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40
            before:-top-[2rem] before:-left-[43.5%] before:hidden before:lg:block"
          >
            My Recent Work
          </h2>
          <p className="subtitle">
            List Of Projects I've Worked On/Collaborated With People<br />
            <span className="">&darr;</span>
          </p>
        </div>
        <Project />
      </div>
    </motion.section>
  )
}

export default Projects;