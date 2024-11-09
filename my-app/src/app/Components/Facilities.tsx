import React from 'react'
import './Facilities.css'

import Image from 'next/image'
import about from '../../assets/library.jpeg'
import about_ground from '../../assets/ground.jpeg'
import about_cafe from '../../assets/OIP (1).jpeg'
const Facilities = () => {
    return (
        <div className='facilities' id='facilities'>
            <h3>Our Facilities</h3>
            <h2>Facilities We Provide</h2>
            <div className='sub-facilities'>
                <div className='child-facilities'>
                    <Image src={about} alt='' className='about-img' width={300} />
                    <h4>World Class Library</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nisi assumenda corrupti voluptate. In enim ab dignissimos numquam quam facilis soluta fugit corporis, ipsam doloribus natus, sed recusandae eveniet totam.</p>

                </div>
                <div className='child-facilities'>
                    <Image src={about_ground} alt='' className='about-img' width={450}/>
                    
                    <h4>Largest Play Ground</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nisi assumenda corrupti voluptate. In enim ab dignissimos numquam quam facilis soluta fugit corporis, ipsam doloribus natus, sed recusandae eveniet totam.</p>
                </div>
                <div className='child-facilities'>
                    <Image src={about_cafe} alt='' className='about-img' width={450}/>
                    
                    <h4>Tasty Healthy Food</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem nisi assumenda corrupti voluptate. In enim ab dignissimos numquam quam facilis soluta fugit corporis, ipsam doloribus natus, sed recusandae eveniet totam.</p>

                </div>
            </div>
        </div>
    )
}

export default Facilities
