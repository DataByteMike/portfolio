import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projectsList } from "@/utilities/data";

const Project = () => {
  const [projects, setProjects] = useState(projectsList);

  return (
    <div>
       <div className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item, index) => {
          if (index === 0) {
            return (
              // Active links
              <Link href={item.url} className="cursor-pointer" target="_blank">
                <div className="bg-secondary p-5 rounded-md">
                  <div key={index} className="flex flex-col items-center text-center">
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
              <div className="bg-secondary p-5 rounded-md">
                <div key={index} className="flex flex-col items-center text-center">
                  <Image className="mb-8" src={item.photo} width={428} height={343} alt="" />
                  <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
                  <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
                </div>
              </div>
          );}
        })}
      </div>
    </div>
  );
};

export default Project;