import React from 'react'
import { HiStar } from 'react-icons/hi'

const TestimonialItem = ({ testimonial }) => {
    const { name, title, img, icon, description } = testimonial
    return (
        <div className='border border-[#eee5e5] p-3 rounded-xl mb-5'>
            <div className='flex items-center justify-between mb-3'>
                <div className='flex gap-4 mb-2'>
                    <img src={img} alt={name} />
                    <div>
                        <h2 className='font-bold mb-[10px]'>{name}</h2>
                        <p className='font-semibold text-lg'>{title}</p>
                    </div>
               </div>
                <img className='text-left' src={ icon } alt="icon" />
            </div>
            <p className=''>{ description }</p>

        </div>
    )
}

export default TestimonialItem