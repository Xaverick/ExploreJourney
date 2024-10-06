import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import './Card.scss'
import { FaCalendarAlt } from "react-icons/fa";

type CardProps = {
    title: string
    description: string
    image: StaticImageData,
    days: number | string
}


const Card = ({title, description, image, days}: CardProps) => {
  return (
    <div className="trendycard">
        <div className="trendyicon">
            <Image src={image} alt="vector" width={20} height={20}/>
        </div>
        <div className='trendyinfo'> <FaCalendarAlt /> &nbsp; {days} Days</div>
        <div className="trendytext">
            <h3 className="trendytitle">{title}</h3>
            {/* <p className='flex'> <FaCalendarAlt /> &nbsp; {days} Days</p> */}
            <p className="trendydesc">{description}</p>
            <button className='trendybtncards'>Explore Now</button>
        </div>
    </div>
  )
}

export default Card