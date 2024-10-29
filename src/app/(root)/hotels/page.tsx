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
            At Explore Journey, we understand the importance of comfortable accommodations when traveling. That's why we've partnered with some of the top hotel chains to provide our customers with the best lodging options at their destinations. 
Our hotel booking service offers a wide selection of properties, from luxurious five-star resorts to budget-friendly inns. Whether you're looking for a beachfront getaway, a city center location, or a quiet countryside retreat, we have you covered.
When you book through Explore Journey, you can expect exceptional service and competitive rates. Our team has carefully vetted each of our hotel partners to ensure they meet our high standards for quality, amenities, and customer satisfaction. <br /> <br />
Explore our featured hotel chains below and let us help you find the perfect place to stay for your next journey:
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