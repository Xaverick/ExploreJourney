import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import './Card.scss'

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
        <p>{days} Days</p>
        <div className="text">
            <h3 className="title">{title}</h3>
            <p className="desc">{description}</p>
        </div>
    </div>
  )
}

export default Card