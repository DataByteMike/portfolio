import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projectsList } from "@/utilities/data";
import { motion } from "framer-motion";


const Projects = () => {
  const [projects, setProjects] = useState(projectsList);

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
            {"List Of Projects I've Worked On/Collaborated With People"}<br />
            <span className="">&darr;</span>
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
            {projects.map((item, index) => {
              if (index === 0) {
                return (
                  // Active links
                  <Link key={index} href={item.url} className="cursor-pointer" target="_blank">
                    <div className="bg-secondary p-5 rounded-md">
                      <div className="flex flex-col items-center text-center">
                        <Image className="mb-8" src={item.photo} width={428} height={343} alt="" />
                        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
                        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
                      </div>
                    </div>
                  </Link>
                );
              }
              else {
                // Unactive links
                return (
                  <div key={index}  className="bg-secondary p-5 rounded-md">
                    <div className="flex flex-col items-center text-center">
                      <Image className="mb-8" src={item.photo} width={428} height={343} alt="" />
                      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
                      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
                    </div>
                  </div>
              );}
            })}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;