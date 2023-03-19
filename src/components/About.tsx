import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <Image className="relativeobject-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" src={"/normal_img/about.png"} width={556} height={556} alt="An astronaut lounging on a tropical island"/>
          <motion.div
            initial={{
              opacity:0
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className=" text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-20 before:-top-[2rem] before:hidden before:lg:block">
                Michael Gourdine
              </h2>
              <p className="mb-4 text-accent tracking-[15px]">Software Engineer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                My name is Michael and I have a deep interest in Artificial Intelligence, Machine Learning, and Web Development. I am 
                always eager to learn new things and take on opportunities whenever possible. I am passionate about staying on the cutting 
                edge of this field, continuously seeking out new challenges to push my boundaries and expand my knowledge. With my curiosity 
                and drive, I am not afraid to take risks and constantly looking for ways to improve myself and my skillset.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;