import Slider from '@/Components/Slider/Slider';
import "./home.scss"
import vector1 from "@/assets/vector.svg"
import Image from 'next/image';
import guidedTour from '@/assets/Home/guide.png'
import flight from '@/assets/Home/flight.png'
import praying from '@/assets/Home/praying.png'
import medical from '@/assets/Home/medical.png'
import statueofliberty from '@/assets/Home/statueofliberty.png'
import honeymoon1 from '@/assets/Home/honeymoon1.png'
import vector3 from '@/assets/signature.svg'
import Link from 'next/link'
import Card from '@/Components/Card/Card';
import trendy1 from '@/assets/Home/trendy1.svg'
import trendy2 from '@/assets/Home/trendy2.svg'
// import trendy3 from '@/assets/Home/trendy3.png'
import trendy3 from '@/assets/Home/trendy3.svg'

export default function Home() {
  return (
    <>
      <div className="home_header">
        <div className="heading">
          <h1 className="title">
          <Image src={vector1} alt="vector" width={100} height={40} />
            No Matter Where <br /> 
            You're Going, <br />
            We'll Take You There            
          </h1>
        </div>
        <Slider /> 
      </div>

      <div className="home_category">
        <div className="about__content">
          <h3 className="about__subheading">CATEGORY</h3>
          <h1 className="about__heading">We Offer Best Services</h1>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <Image src={guidedTour} alt="vector" />
              </div>
              <div className="text">
                <h3 className="title">Guided Tours</h3>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className="card shadow">
              <div className="icon">
                <Image src={flight} alt="vector"/>
              </div>
              <div className="text">
                <h3 className="title">Best Flights Options</h3>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <Image src={praying} alt="vector"/>
              </div>
              <div className="text">
                <h3 className="title">Religious Tour</h3>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <Image src={medical} alt="vector" />
              </div>
              <div className="text">
                <h3 className="title">Medical Insurance</h3>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>  
        </div>
      </div>

      <div className="showcase">
        <div className="left">
          <Image src={honeymoon1} alt='image'/>
        </div>
        <div className="right">
          <h3 className="subheading">Honeymoon Specials</h3>
          <h1 className="title">Our Romantic Tropical 
            <br /> Destinations
          </h1>
          <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, expedita? Ullam suscipit maiores sit totam illo molestiae! Accusantium, at architecto fuga ut pariatur natus beatae nisi neque reiciendis consequuntur? Quis!</p>
          <Link href='/' className='btn'>
            View Pacakges
          </Link>
        </div>
      </div>

      <div className="liberty">
        <h1 className='heading'>Lets Make Your <br /> Next Holiday Amazing <br />
          <Image src={vector3} alt="vector" />
        </h1>
        
        <Image src={statueofliberty} alt="statue of liberty" /> 
      </div>


      <div className="trending_package">
        <h1 className="sub_heading">TRENDY</h1>
        <h1 className="heading">Our Trending Tour <br /> Packages</h1>
        <div className='cards'>
          <Card title='Honeymoon Special' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' days={5} image={trendy1} />
          <Card title='Honeymoon Special' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' days={5} image={trendy2} />
          <Card title='Honeymoon Special' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' days={5} image={trendy3} />

        </div>
      </div>

    </>
  );
}
