import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    console.log(project.banner);
    return (
        <div className="card rounded-md shadow-xl bg-[#13233fe9]" data-aos="flip-left">
            <figure><img src={project?.banner} className='h-[300px] w-full' alt="" /></figure>
            <div className="card-body p-3 text-center">
                <h2 className="text-2xl">{project.siteName}</h2>
                <p className='font-thin text-xl'>{project.desc} </p>
                <div className="card-actions justify-evenly gap-10 my-5 ">
                    {/* <a href={project.clintSite} target="blank" className=" hover:text-gray-600 duration-300 text-3xl" title='Clint Site Code'><FaGithubAlt /></a>
                    <a href={project.serverSite} target="blank" className=" hover:text-gray-600 duration-300 text-3xl" title='Server Site Code'><FaGithubSquare /></a> */}
                    <Link to={`/details/${project.id}`} className='border rounded px-4 py-1 text-xl bg-orange-400 hover:bg-gray-600'>Details</Link>
                    <a href={project.url} target="blank" className="text-orange-400 hover:text-gray-600 duration-300 text-3xl" title='Live Site'><FaRegPaperPlane /></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;