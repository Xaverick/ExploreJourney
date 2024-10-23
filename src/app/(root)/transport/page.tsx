import "./transport.scss"
import banner from "../../../assets/transport/banner.jpg"
import first from "../../../assets/transport/1.jpg"
import second from "../../../assets/transport/2.jpg"
import third from "../../../assets/transport/3.jpg"
import fourth from "../../../assets/transport/4.jpg"
import fifth from "../../../assets/transport/5.jpg"
import Image, { StaticImageData } from "next/image";
interface Transport {
    image: StaticImageData;
    category: string;
    subheading: string;
    heading: string;
    length: string;
    width: string;
    height: string;
    desc: string;
}

const page = () => {
    const transports: Transport[] = [
      {
        image: first,
        category: "2-3 Passengers",
        subheading: "Limousine, driver and maximum three persons",
        heading: "Maruti Swift Dzire",
        length: "3.99m",
        width: "1.69m",
        height: "1.55m",
        desc: "ALS, driver/co-driver airbags, air-conditioning"
      },
      {
        image: second,
        category: "2-4 Passengers",
        subheading: "Minivan, driver, guide and maximum four persons",
        heading: "Toyota Innova",
        length: "4.58m",
        width: "1.76m",
        height: "1.76m",
        desc: "ALS, driver / co-driver airbags, air-conditioning, two comfortable single seats, back bank in the rear"
      },
      {
        image: third,
        category: "4-9 Passengers",
        subheading: "Minibus, driver, guide and maximum nine persons",
        heading: "Tempo Traveller",
        length: "4.58m",
        width: "1.76m",
        height: "1.76m",
        desc: "ALS, driver / co-driver airbags, air-conditioning, two comfortable single seats, back bank in the rear"
      },
      
      {
        image: fourth,
        category: "10-15 Passengers",
        subheading: "Minibus, driver, guide and maximum 14 persons",
        heading: "Minibus (Ashok Leyland)",
        length: "7.09m",
        width: "2.20m",
        height: "2.6m",
        desc: "ALS, air-conditioning, 14 comfortable single seats"
      },
      {
        image: fifth,
        category: "15-35 Passengers",
        subheading: "Tour bus, driver + co-driver, guide and maximum 35 persons",
        heading: "Bus (Ashok Leyland)",
        length: "8.07m",
        width: "2.50m",
        height: "3.00m",
        desc: "ALS, air-conditioning, 35 comfortable single seats"
      }
    ]

    const progressStyle = {
        background: `conic-gradient(#4d5bf9 ${70 * 3.6}deg, #e0e0e0 ${70 * 3.6}deg 360deg)`
    };

    return (
    <>
        <div className="transport_banner">
          <Image src ={banner} alt="" />
          <h1 className='title'>Transportation</h1>
        </div>

        <div className="transport_content">

          {
            transports.map((item, index) => (
              <div className="transport_card" key={index}>
                <Image src={item.image} alt="image" />
                <div className="mt-3">
                  <h1 className="card_category">{item.category}</h1>
                  <p className="card_subheading">{item.subheading}</p>
                </div>

                <h1 className="card_heading">{item.heading}</h1>

                <p className="text">Technical Data / Equipment</p>
                <p className="text">Length: {item?.height}</p>
                <p className="text">Width: {item?.width}</p>
                <p className="text">Height: {item?.height}</p>
                <br />

                <p className="text">{item.desc}</p>
              </div>
            ))
          }


        </div>

        
    </>
  )
}

export default page