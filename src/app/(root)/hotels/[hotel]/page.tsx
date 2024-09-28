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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati exercitationem sunt necessitatibus tenetur non dolorum repellendus eos odio ipsam labore minima illum molestiae quod quas explicabo, nobis excepturi maiores.
                Quae doloribus quaerat provident a odio, veniam ratione fuga fugiat, ullam eveniet dolore expedita dignissimos culpa ut, laudantium recusandae suscipit. Eum, consequuntur? Incidunt consectetur possimus fuga debitis nesciunt voluptas aliquid.
                <br />
                <br />
                Accusantium maiores pariatur ad odio! Illo dolorum ipsum ut voluptate esse, fugit eligendi distinctio, corporis fugiat, minima quaerat expedita adipisci? Pariatur doloribus nisi ipsum architecto rem quidem! Veniam, nemo eum.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ex veniam nisi minus ea aut voluptate labore hic ullam. Dicta perferendis deserunt possimus ducimus amet repellendus facere esse doloremque eaque.
            </p>
        </>

    },

    {
        name: "Taj Hotels",
        image: tajhotel,
        content: <>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati exercitationem sunt necessitatibus tenetur non dolorum repellendus eos odio ipsam labore minima illum molestiae quod quas explicabo, nobis excepturi maiores.
                Quae doloribus quaerat provident a odio, veniam ratione fuga fugiat, ullam eveniet dolore expedita dignissimos culpa ut, laudantium recusandae suscipit. Eum, consequuntur? Incidunt consectetur possimus fuga debitis nesciunt voluptas aliquid.
                <br />
                <br />
                Accusantium maiores pariatur ad odio! Illo dolorum ipsum ut voluptate esse, fugit eligendi distinctio, corporis fugiat, minima quaerat expedita adipisci? Pariatur doloribus nisi ipsum architecto rem quidem! Veniam, nemo eum.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ex veniam nisi minus ea aut voluptate labore hic ullam. Dicta perferendis deserunt possimus ducimus amet repellendus facere esse doloremque eaque.
            </p>
        </>
    },

    {
        name: "ITC Hotels",
        image: itchotel,
        content: <>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati exercitationem sunt necessitatibus tenetur non dolorum repellendus eos odio ipsam labore minima illum molestiae quod quas explicabo, nobis excepturi maiores.
                Quae doloribus quaerat provident a odio, veniam ratione fuga fugiat, ullam eveniet dolore expedita dignissimos culpa ut, laudantium recusandae suscipit. Eum, consequuntur? Incidunt consectetur possimus fuga debitis nesciunt voluptas aliquid.
                <br />
                <br />
                Accusantium maiores pariatur ad odio! Illo dolorum ipsum ut voluptate esse, fugit eligendi distinctio, corporis fugiat, minima quaerat expedita adipisci? Pariatur doloribus nisi ipsum architecto rem quidem! Veniam, nemo eum.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ex veniam nisi minus ea aut voluptate labore hic ullam. Dicta perferendis deserunt possimus ducimus amet repellendus facere esse doloremque eaque.
            </p>
        </>
    },

    {
        name: "Leela Hotels",
        image: leelahotel,
        content: <>
        <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa obcaecati exercitationem sunt necessitatibus tenetur non dolorum repellendus eos odio ipsam labore minima illum molestiae quod quas explicabo, nobis excepturi maiores.
            Quae doloribus quaerat provident a odio, veniam ratione fuga fugiat, ullam eveniet dolore expedita dignissimos culpa ut, laudantium recusandae suscipit. Eum, consequuntur? Incidunt consectetur possimus fuga debitis nesciunt voluptas aliquid.
            <br />
            <br />
            Accusantium maiores pariatur ad odio! Illo dolorum ipsum ut voluptate esse, fugit eligendi distinctio, corporis fugiat, minima quaerat expedita adipisci? Pariatur doloribus nisi ipsum architecto rem quidem! Veniam, nemo eum.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ex veniam nisi minus ea aut voluptate labore hic ullam. Dicta perferendis deserunt possimus ducimus amet repellendus facere esse doloremque eaque.
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
                            <Image src={currdata?.image} className="image" alt="image" />
                        </div>
                    </div>
                    
                </div>
                
            {/* </div> */}
        </>
    )
}

export default page