"use client"

import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import Link from 'next/link'
import { AiOutlineMenu} from 'react-icons/ai'
import { HiX } from 'react-icons/hi'
import {BiChevronDown,BiChevronUp} from 'react-icons/bi'
import  {motion,AnimatePresence} from "framer-motion"
import Image from 'next/image'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [serviceToggle, setServiceToggle] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <nav className={`app__flex start ${scroll ? 'changeback' : "" }`}>
      <div className='app__navbar app__flex'>
        <div className='app__navbarLogo'>
          <Link href="/"><Image src="/assets/logo.png" alt="site logo" width={200} height={50}/> </Link>
        </div>
        
        <ul className='app__navbar-links'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li>
              <Link href="/packages" className='relative-position nohover'>Destinations <BiChevronDown /></Link>
              <ul className='hover-dropdown'>
                <li><Link href="/services/coffewithmk">Koffee With MK</Link></li>
                <li><Link href="/services/launchpad">Launchpad</Link></li>
                <li><Link href="/services/emerge">Emerge</Link></li>
                <li><Link href="/services/transcend">Transcend</Link></li>
                <li><Link href="/services/ownthatstage">Own That Stage</Link></li>
                <li><Link href="/services/legacy">Legacy</Link></li>
               
              </ul>
          </li>
          <li><Link href="" className='relative-position nohover'>Services <BiChevronDown /></Link>
              <ul className='hover-dropdown'>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/transport">Transports</Link></li>
                <li><Link href="">Trains And Flight</Link></li>               
              </ul>
          </li>
          <li><Link href="/hotels">Hotels</Link></li>
        </ul>

        <div className='app__navbar-button'>
          <Link href="/contact">Get In Touch</Link>
        </div>

        <div className='app__navbar-menu'>
          { !toggle && <AiOutlineMenu onClick={() => setToggle(true)} className='navbar-icon' />}
          {toggle && (
            <motion.div 
              className='sidebar'
              whileInView={{ x : [200,0]}} 
              transition={{duration: 0.65, ease: "easeOut"}}

            >
            <ul>
                <HiX className='navbar-icon' onClick={() => setToggle(false)} />
                
                <li><Link href='/' onClick={() => setToggle(false)}> Home </Link></li>
                <li><Link href='/about' onClick={() => setToggle(false)}> About Us </Link></li> 
                <li>
                  <span>
                    <Link href="/packages" onClick={() => setToggle(false)}>Destinations</Link>
                    {serviceToggle ? <BiChevronUp onClick={() => setServiceToggle(false)} /> : <BiChevronDown onClick={() => setServiceToggle(true)} />}
                    <AnimatePresence>
                    {serviceToggle && (
                    
                      <motion.div
                        className="answer"
                        key="content"
                        initial="collapsed"
                        animate="open"                           
                        exit={{ opacity: 0, height: 0 ,padding:0}}
                        transition={{duration: 0.3, ease: "linear"}} 
                        variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 ,padding:0},
                        
                        }}
                      >

                          <li><Link href="/services/coffewithmk" onClick={() => setToggle(false)}>Koffee With Mk</Link></li>
                          <li><Link href="/services/launchpad" onClick={() => setToggle(false)}>Launchpad</Link></li>
                          <li><Link href="/services/emerge" onClick={() => setToggle(false)}>Emerge</Link></li>
                          <li><Link href="/services/transcend" onClick={() => setToggle(false)}>Transcend</Link></li>
                          <li><Link href="/services/ownthatstage" onClick={() => setToggle(false)}>Own That Stage</Link></li>
                          <li><Link href="/services/legacy" onClick={() => setToggle(false)}>Legacy</Link></li>
                      </motion.div>
                        
                    )}
                  </AnimatePresence> 
                  </span>         

                </li>
                <li><Link href='/home' onClick={() => setToggle(false)}> Contact Us </Link></li>

            </ul>
            </motion.div>
          )}
        </div>

      </div>
    </nav>
  )
}

export default Navbar










