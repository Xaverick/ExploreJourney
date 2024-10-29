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
            <Image src={image} alt="vector" />
        </div>
        <div className='trendyinfo'> <FaCalendarAlt /> &nbsp; {days} </div>
        <div className="trendytext">
            <h3 className="trendytitle">{title}</h3>
            {/* <p className='flex'> <FaCalendarAlt /> &nbsp; {days} Days</p> */}
            <p className="trendydesc">{description}</p>
            <Link href={`/packages/${title}?tour=${title}`} className='trendybtncards'>
              Exlore Now
            </Link>
        </div>
    </div>
  )
}

export default Card