import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import ProjectCard from "../Project/projectCard";

const SomeProject = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch('project.json')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProjectData(data)
      })
  }, [])

  return (
    <div className="pb-20 container mx-auto">
      <SectionTitle title="Projects"></SectionTitle>
      <div className="grid my-10 lg:grid-cols-3 gap-6 lg:mx-0 mx-2">
        {
          projectData?.slice(0, 3).map(project =>
            <ProjectCard
              project={project}
              key={project.id}
            ></ProjectCard>
          )
        }
      </div>
      <div className='text-center mt-14'>
                <Link
                    to="/services"
                    className="font-semibold transition-colors duration-200 text-white text-lg leading-21 bg-orange-400 px-[22px] py-[15px] rounded-md hover:bg-gray-600 hover:text-white border"
                    aria-label="More Services"
                    title="More Services"
                >
                    More Services
                </Link>
            </div>
    </div>
  );
};

export default SomeProject;
