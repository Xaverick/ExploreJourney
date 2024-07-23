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
        <div className="icon">
            <Image src={image} alt="vector" width={20} height={20}/>
        </div>
        <p className='flex '> <FaCalendarAlt /> &nbsp; {days} Days</p>
        <div className="text">
            <h3 className="title">{title}</h3>
            {/* <p className='flex'> <FaCalendarAlt /> &nbsp; {days} Days</p> */}
            <p className="desc">{description}</p>
            <button className='btncards'>Explore Now</button>
        </div>
    </div>
  )
}

export default Card