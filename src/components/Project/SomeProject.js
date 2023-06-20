import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTItle/SectionTitle";
import ProjectCard from "../Project/projectCard";

const SomeProject = () => {
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
          projectData?.slice(0,3).map(project =>
            <ProjectCard 
             project={project}
             key={project.id}
            ></ProjectCard> 
          )
        }
      </div>
      <Link to='/projects'>
      <button className="border px-4 py-1  hover:bg-sky-500 rounded hover bg-sky-600">More Project</button>
      </Link>
    </div>
  );
};

export default SomeProject;
