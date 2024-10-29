"use client"

import React, { useState } from 'react'
import Slider from '@/Components/Slider/Slider';
import "./home.scss"
import vector1 from "@/assets/vector.svg"
import Image from 'next/image';
import guidedTour from '@/assets/Home/guide.png'
import flight from '@/assets/Home/flight.png'
import praying from '@/assets/Home/praying.png'
import medical from '@/assets/Home/medical.png'
import statueofliberty from '@/assets/Home/statueofliberty.png'
import honeymoon1 from '@/assets/Home/honeymoon1.png'
import vector3 from '@/assets/signature.svg'
import Link from 'next/link'
import Card from '@/Components/Card/Card';
import trendy1 from '@/assets/Home/trendy1.svg'
import trendy2 from '@/assets/Home/trendy2.svg'
import trendy3 from '@/assets/Home/trendy3.svg'
import scroll from '@/assets/Scroll.png'
// import testimonial from '@/assets/testimonial.png'
// import forward from '@/assets/forward.png'
// import backward from '@/assets/backward.png'
// import comma from '@/assets/commaVector.png'
import {packages} from '@/Constants'


const testimonialData: { description: string, name: string }[] = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur molestiae natus totam suscipit nihil earum accusamus laudantium, amet, culpa eveniet minus corrupti perspiciatis impedit eos, consectetur assumenda aliquid. Ipsam, nihil.',
    name: 'Anubhav',
  },
  {
    description: 'a formal written description or statement about the abilities, character and qualities of a person, often given by a previous employer; a formal written statement about the quality of a product, service, etc.',
    name: 'Vaibhav',
  },
  {
    description: 'n promotion and advertising, a testimonial or show consists of a persons written or spoken statement extolling the virtue of a product. The term testimonial most commonly applies to the sales-pitches attributed to ordinary citizens, whereas the word',
    name: 'Kartikey',
  },
]


export default function Home() {
  const [testimonialIndex, setTestimonialIndex ] = useState(0);
  const currentTestimonial = testimonialData[testimonialIndex];
  
  const handleBackward = (index: number) => {
    if (index > 0) {
      setTestimonialIndex(index - 1);

    } else {
      setTestimonialIndex(testimonialData.length - 1);
    }
  };

  const handleForward = (index: number) => {
    if (index < testimonialData.length - 1) {
      setTestimonialIndex(index + 1);
    } else {
      setTestimonialIndex(0);
    }
  };
  
  
  return (
    <>
      <div className="home_header">
        <div className="heading">
          <h1 className="title">
          <Image src={vector1} alt="vector" width={100} height={40} />
            No Matter Where <br /> 
            You're Going, <br />
            We'll Take You There            
          </h1>
        </div>
          <Image src={scroll} alt="scroll" className='scroll '/>
        <Slider /> 
      </div>

      <div className="home_category">
        <div className="about__content">
          <h3 className="about__subheading">CATEGORY</h3>
          <h1 className="about__heading">We Offer Best Services</h1>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <Image src={guidedTour} alt="vector" />
              </div>
              <div className="text">
                <h3 className="title">Guided Tours</h3>
                <p className="desc">Expert local guides. Hidden gems discovery. Small group adventures. </p>
              </div>
            </div>

            <div className="card shadow">
              <div className="icon">
                <Image src={flight} alt="vector"/>
              </div>
              <div className="text">
                <h3 className="title">Best Flights Options</h3>
                <p className="desc">Lowest fare guarantee.Premium airlines. 24/7 flight support. </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <Image src={praying} alt="vector"/>
              </div>
              <div className="text">
                <h3 className="title">Religious Tour</h3>
                <p className="desc">Sacred destinations. Spiritual journeys. Peaceful pilgrimages. </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <Image src={medical} alt="vector" />
              </div>
              <div className="text">
                <h3 className="title">Medical Insurance</h3>
                <p className="desc">Worldwide coverage. Medical protection. Emergency assistance. </p>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <div className="showcase">
        <div className="left">
          <Image src={honeymoon1} alt='image'/>
        </div>
        <div className="right">
          <h3 className="subheading">Honeymoon Specials</h3>
          <h1 className="showcasetitle">Our Romantic Tropical 
            <br className='hidden lg:block' /> Destinations
          </h1>
          <p className='desc'>Discover the world's most romantic destinations, hand-picked for newlyweds. Experience luxury stays, intimate experiences, and breathtaking views. Let us transform your honeymoon dreams into cherished memories with our exclusive couples' packages."
          Would you like me to adjust the length or focus of this content? I can also suggest specific destination highlights or package features if you'd like to showcase those instead.</p>
          <Link href='/packages/Rajasthan Tour?tour=Kashmir Tour' className='btn'>
            View Pacakages
          </Link>
        </div>
      </div>

      <div className="liberty">
        <h1 className='heading'>Lets Make Your <br /> Next Holiday Amazing <br />
          <Image src={vector3} alt="vector" />
        </h1>
        
        <Image src={statueofliberty} alt="statue of liberty" /> 
      </div>


      <div className="trending_package">
        <h1 className="sub_heading">TRENDY</h1>
        <h1 className="heading">Our Trending Tour <br /> Packages</h1>
        <div className='trendycards'>
          <Card title={packages[0].title} description={packages[0].description} days={packages[0].days} image={packages[0].img} />
          <Card title={packages[1].title} description={packages[1].description} days={packages[1].days} image={packages[1].img} />
          <Card title={packages[2].title} description={packages[2].description} days={packages[2].days} image={packages[2].img} />
        </div>
      </div>

      {/* <div className='testimonials'>
        <div className="testimonialContent">
          <h3 className='sub_heading'>PROMOTION</h3>
          <h1 className='heading'>See What Clients Say <br />About Us</h1>
          <div className="cards">
            <button onClick={() => handleBackward(testimonialIndex - 1)} className='back'> 
              <Image src={backward} alt="left arrow" />
            </button>
            {currentTestimonial && <div className="testimonial_card">
                <Image src={comma} alt="comma" />
                <p className="desc">{currentTestimonial.description} <span className=''>"</span></p>
                <h3 className="title">{ currentTestimonial.name}</h3>
            </div>

            }
            <button onClick={() => handleForward(testimonialIndex + 1)} className='next'> 
              <Image src={forward} alt="right arrow" />
            </button>
          </div>
        </div>
      </div> */}

    </>
  );
}
