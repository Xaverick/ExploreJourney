"use client"

import "./hotel.scss"

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react"
import oberoi from "../../../../assets/hotels/the-oberoi-logo.jpg"
import tajhotel from "../../../../assets/hotels/taj-hotels-logo.jpg"
import itchotel from "../../../../assets/hotels/itc-hotel-logo.jpg"
import leelahotel from "../../../../assets/hotels/the-leela-logo.jpg"

const data = [
    {
        name: "The Oberoi Hotels",
        image: oberoi,
        content: <>
            <p className="para">
                Oberoi Hotels & Resorts story wrote its early chapters in 1934 in Shimla where Mr. M.S. Oberoi pioneered the idea of luxury hospitality in India by opening his first hotel. The lessons self-taught, the inevitable mistakes made, the wisdom gained, the prestigious awards won. All have formed the compass for successive generations of Oberois.
                <br />
                <br />
                You will be hard-pressed to find properties as beautiful as Oberoi Hotels or restaurants, guest rooms, and exceptional facilities. But these are not what give Oberoi Hotels & Resorts its incomparable reputation.
                <br />
                What guests speak about most is the singular experience of being truly seen, heard, and understood. Something no other hotel or resort can emulate. The astonishing effect one feels from an act, a gesture, a word; that is heartfelt.
            </p>
        </>

    },

    {
        name: "Taj Hotels",
        image: tajhotel,
        content: <>
            <p className="para">
            Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited headquartered at Express Towers, Nariman Point in Mumbai. Incorporated by the founder of the Tata Group, Jamsetji Tata, in 1903, the company is a part of the Tata Group, one of India's largest business conglomerates. The company employed over 20,000 people in the year 2010.
                <br />
                <br />
                Jamsetji Nusserwanji Tata, the founder of the Tata Group, opened the Taj Mahal Palace, a hotel in Mumbai (formerly called Bombay) overlooking the Arabian Sea, on 16 December 1903. It was the first Taj property and the first Taj hotel. There are several anecdotal stories about why Tata opened the Taj hotel. According to a story, he decided to open the hotel after an incident involving racial discrimination at the Watson's Hotel in Mumbai, where he was refused entry as the hotel permitted only Europeans.
            </p>
        </>
    },

    {
        name: "ITC Hotels",
        image: itchotel,
        content: <>
            <p className="para">
            ITC Hotels is India's third-largest hotel chain with over 100 hotels. It is based in the Hotels Division Headquarters at Kolkata, West Bengal. It is part of the ITC Limited group of companies. ITC Hotels is regularly voted amongst the best employers in Asia in the hospitality sector.
                <br />
                <br />
                ITC Limited entered the hotel business on 18 October 1975 with the opening of a hotel in Chennai, which was renamed Hotel Chola. ITC Hotels has a reputation of playing host to visiting royalty and world leaders time and again.
                <br />
                <br />
                The hotel chain works on a philosophy of "Responsible Luxury" and as a result, each hotel in the chain has a LEEDS (Leadership in Energy and Environmental Design) Platinum rating.
                <br /> <br />
                Originally incorporated as Rama Hotels Pvt Ltd in 1972 and renamed Vishwarama Hotels in 1973. The Vazir Sultan Tobacco Co Ltd. (VST Industries) bought Vishwarama Hotels in 1980-1981 and soon after, in 1982, the first luxury hotel for the new chain opened in Bangalore.
                <br /> <br />
                In 1984, ITC Ltd. bought the entire equity capital from VST. In 1985 the Indian government awarded the Hotel that would later become the ITC Gardenia a five-star rating.
                <br /> <br />The company name was changed from ITC Ltd. to ITC Hotels in 1986.
            </p>
        </>
    },

    {
        name: "Leela Hotels",
        image: leelahotel,
        content: <>
        <p className="para">
        The Leela Palaces, Hotels and Resorts, commonly known as The Leela, is an Indian luxury hotel chain, founded in 1986 by C. P. Krishnan Nair, and owned by Brookfield Asset Management. Currently, The Leela is a group of eight luxury palaces and hotels.
            <br /> <br />
            The Leela Hotels were founded by C P Krishnan Nair, owner of The Leela Group, which he named after his wife. Nair bought 11 acres of land near his house in Sahar Village, Mumbai to build his first hotel, The Leela Mumbai, in 1986. It was the first luxury hotel near the current Chhatrapati Shivaji International Airport.
            <br />
            <br />
            In 1991 a second hotel was opened in Goa. The Leela Goa was designed to keep the overall architecture of the state in mind. The luxury seaside resort has taken its inspiration from the Portuguese heritage and is spread over 75 acres of land in South Goa nearby Cavelossim Beach.
            <br /> <br /> 
            In 2001 the group's first modern hotel was built with 357 rooms in the IT capital of India, Bangalore, inspired by the Mysore Palace and the architecture of the 13th century Vijayanagara empire, and is surrounded by seven acres of gardens.
        </p>
        </>

    }
]


const page = () => {
    const searchParams = useSearchParams()
    const name = searchParams.get('hotel')
    const [currdata, setcurrdata] = useState<typeof data[0] | undefined>(undefined);
    useEffect(() => {
        const found = data.find((item) => item.name === name)
        setcurrdata(found || undefined)
    }, [name])
    return (
        <>
            <div className="hotel-banner">
                <h2 className="title">{currdata?.name}</h2>
            </div>

            <div className="content">
                {/* <div className="top"> */}
                    <h1 className="heading">{currdata?.name}</h1>
                    <div className="details">
                        <div className="left">
                            {currdata?.content}
                        </div>
                        <div className="right">
                            <Image src={currdata?.image || ""} className="image" alt="image" />
                        </div>
                    </div>
                    
                </div>
                
            {/* </div> */}
        </>
    )
}

export default page