import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaGithubSquare, FaRegPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const ProjectDetails = () => {
    const [singleProject, setSingleProject] = useState([])
    const params = useParams()
    const id = Number(params.id);

    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => {
                const project = data.filter(pro => pro.id === id)
                setSingleProject(project[0])
            })
    }, [id])
    console.log(singleProject);

    return (
        <>
            <div className='w-11/12 mx-auto  my-20'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        singleProject?.banner?.map(img => <SwiperSlide >
                            <img className='h-[500px] w-full  rounded-md' src={img} alt="project" />
                        </SwiperSlide>)
                    }
                </Swiper>
                <div className="card  gap-10 bg-[#102649e9] shadow-xl mt-10">
                    <div className="card-body">
                        <h2 className="text-3xl mb-3 text-center font-bold">{singleProject.siteName}</h2>
                        <p className='mt-3 font-semibold'>{singleProject.details}</p>
                        <p className='mt-3 font-semibold'>Technology used : {singleProject.technology}</p>
                        <div className="card-actions justify-evenly gap-10 mt-5">
                            <div className='flex flex-col items-center gap-y-4'>
                                <a href={singleProject.clintSite} target="blank" className=" hover:cursor-pointer hover:text-sky-500 duration-300 text-3xl" title='Clint Site Code'><FaGithubAlt /></a>
                                <p>Clint Site Code</p>
                            </div>
                            <div className='flex flex-col items-center gap-y-4'>
                                <a href={singleProject.serverSite} target="blank" className=" hover:text-sky-500 duration-300 text-3xl" title='Server Site Code'><FaGithubSquare /></a>
                                <p>Server Site Code</p>
                            </div>
                            <div className='flex flex-col items-center gap-y-4'>
                                <a href={singleProject.url} target="blank" className=" hover:text-sky-500 duration-300 text-3xl" title='Live Site'><FaRegPaperPlane /></a>
                                <p>Live Site Link</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;