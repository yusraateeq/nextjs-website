"use client"
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import Image from 'next/image'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toogleMenu=()=>{
    mobileMenu? setMobileMenu(false) :setMobileMenu (true)
  }

  return (
    <nav className={` ${sticky? 'menu' : ''}`}>
      <li className='logo'><a href="#hero">Education</a></li>
      <ul className={mobileMenu ? '':'hide-on-mobile'}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><button className='button'><a href="#contact">Contact</a></button></li>
      </ul>
      <Image src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default Navbar
