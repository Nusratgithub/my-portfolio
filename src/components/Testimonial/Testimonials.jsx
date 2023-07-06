import React from 'react'
import TestimonialHeading from './TestimonialHeading'
import review1 from '../../assets/testimonial/review1.png'
import review2 from '../../assets/testimonial/review2.png'
import quote from '../../assets/testimonial/quote.png'
import TestimonialItem from './TestimonialItem'

const testimonials = [
    {
        id: 1,
        name: 'Awlad Hossain',
        title: 'Businessman',
        img: review1,
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 2,
        name: 'Awlad Hossain',
        title: 'Businessman',
        img: review2,
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
]

const Testimonials = () => {
    return (
        <section className='text-white container mx-auto mb-10'>
            <TestimonialHeading />
            <div className='lg:flex  gap-6 '>
            {
                    testimonials.map(testimonial => (
                        <TestimonialItem key={ testimonial.id } testimonial={ testimonial } />
                    ))
            }
            </div>
        </section>
    )
}

export default Testimonials