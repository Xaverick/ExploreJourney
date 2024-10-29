"use client";

import React, { useState, useEffect } from "react";
import "./destination.scss";
import Image, { StaticImageData } from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { popularPackages, detailedIteneray } from "@/Constants";
import phone from "@/assets/Packages/phone.png";
import shell from "@/assets/Packages/shell.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import Plan from "./plan";
import { useSearchParams } from 'next/navigation';
// type }CardProps = {
//   title: string;
//   description: string;
//   image: StaticImageData;
//   days: number | string;
// };

// const Card = ({ title, description, image, days }: CardProps) => {
//   return (
//     <div className="packagecard">
//       <div className="packageimage">
//         <Image src={image} alt="vector" />
//         <div className="tag"><FaCalendarAlt /> &nbsp; {days} Days</div>
//       </div>
//       <div className="packageinfo">
//         <h1>{title}</h1>
//         <p>{description}</p>
//         {/* <Link href="" className='packagebtn'>View Details</Link> */}
//       </div>
//     </div>
//   );
// };

const page = ({ params }: { params: { destination: string } }) => {
  const [selectedInfo, setSelectedInfo] = useState("info");
  const searchParams = useSearchParams();
  const tour = searchParams.get('tour'); 
  console.log(tour);
  const result = tour ? detailedIteneray.find((item) => item.title.toLowerCase() === tour.toLowerCase()) : null;
  const destination = result;
  return (
    <>
      {destination ? 
      <>
        <div className="destination_banner">
          <h1 className="title">{destination.title}</h1>
        </div>
      

      <div className="destination_container">
        <Image src={shell} alt="" className="shellimage" />
        <div className="destination_content">
          <div className="destination-nav">
            <h1
              className={`heading ` + (selectedInfo === "info" ? "active" : "")}
              onClick={() => setSelectedInfo("info")}
            >
              <IoIosInformationCircleOutline /> &nbsp; Information
            </h1>
            <h1
              className={`heading ` + (selectedInfo === "plan" ? "active" : "")}
              onClick={() => setSelectedInfo("plan")}
            >
              <RiCalendarScheduleLine /> &nbsp; Tour Plan
            </h1>
            {/* <h1
              className={
                `heading ` + (selectedInfo === "gallery" ? "active" : "")
              }
              onClick={() => setSelectedInfo("gallery")}
            >
              <GrGallery /> &nbsp; Gallery
            </h1> */}
          </div>

          <div className="destination_maincontent">
            <div className="left">
              {selectedInfo === "info" && (
                <>
                <div className="info">
                  <h1 className="heading">{destination.title}</h1>

                  <p className="description">{destination.description}</p>

                  <div className="list">
                    {destination.details.map((item, index) => (
                      <div className="item" key={index}>
                        <h2 className="key">{item.key}</h2>
                        <p className="value">: {item.value}</p>
                      </div>
                    ))}

                    <div className="item">
                      <h2 className="key">Included</h2>
                      <div className="include_value">
                        {destination.included.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                    </div>

                    <div className="item">
                      <h2 className="key">Not Included</h2>
                      <div className="include_value">
                        {destination.notIncluded.map((item, index) => (
                          <p key={index}>{item}</p>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="formgallery">
                    <h1 className="galleryHeading">From Our Gallery</h1>
                    <p className="galleryDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dicta sapiente animi explicabo quisquam unde adipisci dolores eveniet! Autem provident dolorem iure consequuntur laborum reprehenderit doloremque rerum ad, nihil tenetur!</p>

                    <div className="showcase">
                        {destination.gallery.map((item, index) => (
                            <Image src={item} alt="" />
                        ))}
                    </div>
                  </div>
                </div>
                </>
              )}

              {selectedInfo === "plan" && (
                  <Plan data={destination.tourPlan} />
              )}
{/* 
              {selectedInfo === "gallery" && (
                <div className="gallery">
                  <h1 className="heading">Gallery</h1>
                </div>
              )} */}
            </div>

            <div className="right">
              {/* <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="search-click">Search</button>
              </div> */}

              <div className="popular-post">
                <h2 className="popular_heading">Popular Destinations</h2>
                {popularPackages.map((item, index) => (
                  <div className="blog__card" key={index}>
                    {item.img && <Image src={item.img} alt="" />}
                    <div className="blog__card__content">
                      <h2 className="hover:text-[#DF6951] "><Link href={`/packages/${item.title}?tour=${item.title}`}>{item.title}</Link></h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <Image src={phone} alt="" className="phoneImg" /> */}
        </div>
      </div>
      </>
      :
      <>
        <div className="destination_banner">
          <h1 className="title">Destination Not Found</h1>
        </div>
      </>
      }
    </>
  );
};

export default page;


