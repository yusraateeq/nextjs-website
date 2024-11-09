import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div className='services' id='services'>
            <h3>Our Services</h3>
            <h2>What we Offer</h2>
            <div className='sub-services'>
                <div className='child-services'>
                    <h4>Intermediate</h4>
                    <p>Welcome to our university Intermediate Program, where we lay a strong foundation for your academic and professional journey. With a focus on personalized guidance, diverse subject options, and a supportive learning environment, we help students develop the skills and knowledge they need for future success. Join us and take the first step toward a bright future!</p>
                </div>
                <div className='child-services'>
                    <h4>Degree</h4>
                    <p>Our Degree Program offers an enriching academic experience designed to equip students with in-depth knowledge, critical thinking skills, and real-world insights. With experienced faculty, hands-on learning opportunities, and a vibrant campus community, we prepare our graduates to excel in their careers and make meaningful contributions to society. Discover your potential and shape your future with us!</p>
                </div>
                <div className='child-services'>
                    <h4>Post Graduation</h4>
                    <p>Our Postgraduate Program is crafted for ambitious learners ready to deepen their expertise and advance their careers. With access to advanced research, experienced mentors, and a dynamic academic environment, we empower students to become leaders and innovators in their fields. Join us to take your knowledge and skills to the next level and make a lasting impact.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
