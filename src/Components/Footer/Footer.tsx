import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import footerLogo from '@/assets/logo.png'
import './Footer.scss'
import footerBackground from '@/assets/footerBackground.png' 
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='app__footer'>
      <div className="upper__footer">
        <section className="footer__section mr-4">
          <Image src={footerLogo} alt="footer logo" />
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section className="footer__section starting">
          <h1 className='heading'>Company</h1>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/packages">Destinations</Link></li>
          </ul>
        </section>

        <section className="footer__section">
          <h1 className='heading'>Destinations</h1>
          <ul>
            <li><Link href="/packages/Golden Triangle Tour?tour=Golden Triangle Tour">Golden Triangle Tour</Link></li>
            <li><Link href="/packages/Rajasthan Tour?tour=Rajasthan Tour">Rajasthan Tour</Link></li>
            <li><Link href="/packages/Kerala Tour?tour=Kerala Tour">Kerala Tour</Link></li>
          </ul>
        </section>
        <section className="footer__section ">
          <h1 className='heading'>Socials</h1>
          <div className="socials">
            <Link href={""}><FaInstagram /></Link>
            <Link href={""}><FaFacebook /></Link>
            <Link href={""}><FaXTwitter /></Link>
          </div>
          <div className='mt-2'>
            <p><b>Eamil:</b><a href="mailto:explorejourney13@gmail.com" className='hover:text-[#DF6951]'> explorejourney13@gmail.com</a></p>
            <p><b>Contact:</b> +91 8368912200</p>
          </div>
        </section>
      </div>

      <div className="line" />

      <div className="lower__footer">
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>


    </footer>
  )
}

export default Footer