import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTItle/SectionTitle";
import ProjectCard from "../Project/projectCard";

const Project = () => {
const [projectData,setProjectData] = useState([]);
useEffect(() => {
  fetch('project.json')
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setProjectData(data)
      })
}, [])

  return (
    <div className="py-10 container mx-auto">
      <SectionTitle title="Projects"></SectionTitle>
      <div className="grid my-10 lg:grid-cols-3 gap-6 lg:mx-0 mx-2">
        {
          projectData?.map(project =>
            <ProjectCard 
             project={project}
             key={project.id}
            ></ProjectCard> 
          )
        }
      </div>
    </div>
  );
};

export default Project;
