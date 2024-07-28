import React from "react";
import "./packages.scss";
import Image, { StaticImageData } from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { packages, popularPackages } from "@/Constants";
import phone from "@/assets/packages/phone.png";
import shell from "@/assets/packages/shell.png";

type CardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  days: number | string;
};

const Card = ({ title, description, image, days }: CardProps) => {
  return (
    <div className="packagecard">
      <div className="packageimage">
        <Image src={image} alt="vector" />
        <div className="tag"><FaCalendarAlt /> &nbsp; {days} Days</div>
      </div>
      <div className="packageinfo">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <Link href="" className='packagebtn'>View Details</Link> */}
      </div>
    </div>
  );
};

const page = () => {
  return (
    <>
      <div className="packages_banner">
        <h1 className="title">Travel With Us</h1>
      </div>

      <div className="packages_container">
        <Image src={shell} alt="" className="shellimage"/>
        <div className="packages_content">
          <h1 className="heading">Our Packages</h1>
          <div className="maincontent">
            <div className="left">
              {packages.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.img}
                  days={item.days}
                />
              ))}
            </div>

            <div className="right">
              <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="search-click">Search</button>
              </div>

              <div className="popular-post">
                <h2 className="popular_heading">Popular Destinations</h2>
                {popularPackages.map((item, index) => (
                  <div className='blog__card' key={index}>
                      {item.img && (<Image src={item.img} alt="" />)}
                      <div className='blog__card__content'>
                          <h2>{item.title}</h2>
                          <p>{item.description}</p>
                      </div>
                  </div>
                ))}

                
              </div>

            </div>
          </div>
          <Image src={phone} alt="" className="phoneImg" />
        </div>
      </div>
    </>
  );
};

export default page;
