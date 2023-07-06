import React from 'react'
import { HiStar } from 'react-icons/hi'

const TestimonialItem = ({ testimonial }) => {
    const { name, title, img, icon, description } = testimonial
    return (
        <div className='border border-[#eee5e5] p-7 rounded mb-10'>
            <div className='flex items-center'>
                <div className='mx-auto'>
                    <img src={img} className='mx-auto mb-3' alt={name}/>
                    <h2 className='font-semibold mb-3'>{name}</h2>
               </div>
            </div>
            <p className='text-center'>{ description }</p>

        </div>
    )
}

export default TestimonialItem