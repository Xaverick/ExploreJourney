import React from 'react'
import './about.scss'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/assets/About/Banner.png'
import circle from '@/assets/About/circle.png'
import ellipse from '@/assets/About/ellipse.png'
import bgstyle from '@/assets/About/bgstyle.png'
import videoDemo from '@/assets/About/videoDemo.png'
import popular from '@/assets/About/popular.png'
import shell from '@/assets/About/shell.png'
import StatComponent from '@/Components/Stat/Stat'

const page = () => {
  const progressStyle = {
    background: `conic-gradient(#4d5bf9 ${70 * 3.6}deg, #e0e0e0 ${70 * 3.6}deg 360deg)`
  };
  return (
    <>
      <div className="about_banner">
        <h1 className='title'>About Us</h1>
      </div>

      <div className="info">
        <div className="left__info">
          <h2 className='info_sub_heading'>PROMOTION</h2>
          <h1 className="info_heading">We Provide The Best Sightseeing Tours</h1>
          <p className='info_desc'>LAt Explore Journey, we turn travel dreams into unforgettable experiences. With years of expertise in crafting exceptional tours, we specialize in providing comprehensive travel solutions that combine comfort, adventure, and cultural immersion. From seamless flight bookings to handpicked accommodations, expert guides to personalized itineraries, our dedicated team ensures every aspect of your journey is meticulously planned.</p>
          <button className='info__btn'>View Packages</button>
        </div>
        <div className="right_info relative">
          <Image src={bgstyle} alt="Banner" className='image1'/>
          <Image src={circle} alt="Banner" className='image2' />
          <Image src={ellipse} alt="Banner" className='image3'/>
        </div>
      </div>

      <div className="video_demo">
        <Image src={videoDemo} alt="Banner" />
      </div>


      <div className="popularTours">
        <div className="popular_left">
          <Image src={popular} alt="Banner" />
        </div>
        <Image src={shell} alt="shell" className='shell'/>
        <div className="popular_right">
          <h1 className='popular_sub_heading'>TREND</h1>
          <h1 className='popular_heading'>Our Popular Tour Plans</h1>
          <p className='popular_desc'>Discover our most sought-after tour experiences, crafted with passion and expertise. From sacred pilgrimages to cultural sightseeing and thrilling adventures. Join the 50% of travelers choosing our signature sightseeing tours across stunning destinations.</p>
          <div className="stats">
            <div className="statcontainer">
              <StatComponent percentage={27} />
              <p className='mt-2 font-bold'>Spiritual</p>
            </div>
            <div className="statcontainer">
              <StatComponent percentage={50} />
              <p className='mt-2 bold'>Sightseen</p>
            </div>
            <div className="statcontainer">
              <StatComponent percentage={23} />
              <p className='mt-2 bold'>Adventure</p>
            </div>
          </div>
        </div>
    </div>
    
    </>
  )
}

export default page