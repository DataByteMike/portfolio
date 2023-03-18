import Image from "next/image";

const Skill = () => {
  return (
    <section id="skill" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          {/* Left Side */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className=" text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-skill relative before:absolute before:opacity-20 before:-top-[2rem] before:hidden before:lg:block">
                Skill
              </h2>
              <p className="mb-4 text-accent tracking-[2px]">What I Worked With</p>
              <hr className="mb-8 opacity-5" />
              <div className="mb-8">
                <p className="mb-4">
                  Programming Languages: Python, Java, JavaScript, Typescript, HTML/CSS, C
                </p >
                <p className="mb-4">
                  Web Frameworks: Node.js, Next.js, Express.js React, Tailwind CSS
                </p>
                <p className="mb-4">
                  Databases: SQL, NoSQL, MongoDB, Dask, Apache Spark(PySpark)
                </p>
                <p className="mb-4">
                  Deep Learning Frameworks: TensorFlow, PyTorch, Keras
                </p>
                <p className="mb-4">
                  Tools: GitHub, Git, Jira, AWS(S3, DynamoDB, EC2)
                </p>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <Image className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" src={"/normal_img/book.jpg"} width={556} height={556} alt="Stack of books"/>
        </div>
      </div>
    </section>
  )
}

export default Skill;