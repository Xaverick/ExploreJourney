import "./hotels.scss"
import asset1 from "../../../assets/hotels/asset 1.jpeg"
import asset2 from "../../../assets/hotels/asset 2.jpeg"
import asset3 from "../../../assets/hotels/asset 3.jpeg"
import asset4 from "../../../assets/hotels/asset 4.jpeg"
import Image from 'next/image'
import Link from 'next/link'


const Hotels = () => {
    const progressStyle = {
        background: `conic-gradient(#4d5bf9 ${70 * 3.6}deg, #e0e0e0 ${70 * 3.6}deg 360deg)`
    };
    return (
    <>
        <div className="hotels_banner">
            <h1 className='title'>Hotels</h1>
        </div>

        <div className="hotel_content">
            <h1 className="heading">Hotels</h1>
            <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam excepturi doloremque maiores, consequatur unde, adipisci fugiat officiis explicabo voluptate suscipit id aut ipsam laborum sunt corrupti. Excepturi, distinctio quam!
                Quae doloribus quaerat provident a odio, veniam ratione fuga fugiat, ullam eveniet dolore expedita dignissimos culpa ut, laudantium recusandae suscipit. Eum, consequuntur? Incidunt consectetur possimus fuga debitis nesciunt voluptas aliquid.
                Accusantium maiores pariatur ad odio! Illo dolorum ipsum ut voluptate esse, fugit eligendi distinctio, corporis fugiat, minima quaerat expedita adipisci? Pariatur doloribus nisi ipsum architecto rem quidem! Veniam, nemo eum.
            </p>

            <div className="hotel_cards">
                <div className="hotel_card">
                    <Image src={asset1} alt="image1" />
                    <h1 className="card_heading">The Oberoi Hotels</h1>
                    <Link href="/hotels/Theoberoihotels?hotel=The Oberoi Hotels" className="link">Read More</Link>
                </div>
                <div className="hotel_card">
                    <Image src={asset2} alt="image1" />
                    <h1 className="card_heading">Taj Hotels</h1>
                    <Link href="/hotels/Tajhotels?hotel=Taj Hotels" className="link">Read More</Link>
                </div>
                <div className="hotel_card">
                    <Image src={asset3} alt="image1" />
                    <h1 className="card_heading">ITC Hotels</h1>
                    <Link href="/hotels/ITChotels?hotel=ITC Hotels" className="link">Read More</Link>
                </div>
                <div className="hotel_card">
                    <Image src={asset4} alt="image1" />
                    <h1 className="card_heading">Leela Hotels</h1>
                    <Link href="/hotels/Leelahotels?hotel=Leela Hotels" className="link">Read More</Link>
                </div>
            </div>
        </div>
    </>

  )
}

export default Hotels