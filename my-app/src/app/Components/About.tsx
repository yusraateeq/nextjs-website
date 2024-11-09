import React from 'react'
import './About.css'
import Image from 'next/image'
import about from '../../assets/about-uni.jpeg'
const About = () => {
  return (
    <div className='about container' id='about'>
         <div className="about-left">
        <Image src={about} alt='' className='about-img'/>   
      </div>
         <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Empowering Minds, Shaping Futures</h2>
        <p>At our university, we are dedicated to fostering a learning environment that inspires growth, innovation, and excellence. Through cutting-edge programs, world-class faculty, and diverse opportunities, we prepare our students to excel in their fields and make a meaningful impact in the world.</p>
        <p>Join a community that values curiosity, collaboration, and creativity. Our university provides a vibrant and supportive space for students to explore their passions, gain real-world experience, and achieve their goals. Here, education goes beyond the classroom to open doors to a brighter future.</p>
      </div>
     
     
    </div>
  )
}

export default About
