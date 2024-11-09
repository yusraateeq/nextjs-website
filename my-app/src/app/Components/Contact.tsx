import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3>Contact Us</h3>
      <h2>Get In Touch</h2>
      <div>
      <div className="contact-col">
        <form action="https://formspree.io/f/mrbgbypk" method='POST'>
            <label>your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            
            <label>your Email</label>
            <input type="email" name="email" id="" placeholder='Enter your email' required/>

            <label>your Email</label>
            <textarea name="message" id="" rows={6} placeholder='enter your message' required></textarea>
            <button type='submit' className='button btn button-1'>Submit now</button>
        </form>
        <span></span>
      </div>
       

      </div>
    </div>
  )
}

export default Contact
