
import styles from "../Services/services.module.css"
import car1 from "../../images/carousal-img/banner20.jpg";

import car2 from "../../images/carousal-img/book10.jpg";

import car3 from "../../images/carousal-img/brochure10.jpg";

import car4 from "../../images/carousal-img/menu20.jpg";

import car5 from "../../images/carousal-img/pack10.jpg";

import car6 from "../../images/carousal-img/profile10.jpg";

import car7 from "../../images/carousal-img/social20.jpg";

import car8 from "../../images/carousal-img/tshirt10.jpg";

import car9 from "../../images/carousal-img/clogo20.jpg";
// import video1 from "../../images/motion/motion3.mp4"

export default function Services() {

  let images = [
    {
      img:car9,
      title:"Logo Design",
      sTitle:'',
      desc:"Visual representation, brand identity, memorable, simplicity, versatility,recognition, symbolism, professionalism, brand values, creative expression."
    },
    {
      img:car8,
      title:"T-Shirts Design",
      sTitle:'',
      desc:"T-Shirt Design, creativity, individual expression, style, graphic design,colors, illustrations, patterns, uniqueness, comfort."
    },
    {
      img:car7,
      title:`social media design`,
      sTitle:'(Facbook-Instagram-Twitter)',
      desc:"Social media design, branding, visual consistency, engagement, aesthetics, storytelling,user experience, graphics, typography, responsiveness."
    },
    {
      img:car6,
      title:"Profile Design",
      desc:"Profile Design involves creating a visually engaging and cohesive representation of an individual or brand on various platforms."
    },
    {
      img:car5,
      title:"Package design",
      desc:"Package design refers to the process of creating the visual and functional elements of product packaging."
    },
    {
      img:car4,
      title:`Menus Design`,
      desc:"Menu design involves creating visually appealing and user-friendly menus for restaurants,cafes, or other food establishments."
    },
    {
      img:car3,
      title:"Advertising design",
      sTitle:'(brochure - flyer)',
      desc:"Brochure design involves creating visually appealing and informative printed materials used for marketing and promotional purposes."
    },
    {
      img:car2,
      title:`Book Cover Design`,
      desc:"Cover design refers to the process of creating visually appealing and engaging covers for various types of media,including books, magazines, albums, and more."
    },
    {
      img:car1,
      title:"Outdoor Design",
      sTitle:'(banner - billboard)',
      desc:"Banner design refers to the process of creating visually appealing and attention-grabbing banners used for advertising and promotional purposes."
    }]
  return <>
  <div className={`container   my-5 ${styles.mh}`}>
      <div className="row text-center mb-2  justify-content-center">
        <h2 className={`py-2 ${styles.sectionHeading}`}>Our Services</h2>
      </div>
      <div className="row flex-wrap">
      {
      images.map((item,index) => {
        return <div key={index} className="col-md-4 mt-3 ">
          <div className="">
          <div className={`card ${styles.card2}`}>
            <div className="">
              <img className='w-100 ' src={item.img} alt="" />
            </div>
            <h3 className={` ${styles.card2.h3}`}>{item.title}<span className='fs-6'>{item.sTitle}</span></h3>
            <p style={{height:'70px',overflow:'hidden'}}>
            {item.desc}
            </p>
          </div>
        </div>
        </div>
      })
    }
    </div>
    </div>
    
    {/* <div className='container mh my-5'>
      <div className="row text-center mb-2  justify-content-center">
        <h2 className="section-heading py-2 ">Our Services</h2>
      </div>
      <div className="row">
        
        <div className="col-md-12 column">
          <div className="card1">
          <div className="img-wrapper">
          <video className='w-100' autoPlay muted loop  src={video1}></video>
            </div>
            <h3>Motion Graphic Design  <span className='fs-5'><br/></span></h3>
            <p>
            Motion graphics combine visual elements, animation, and audio to create engaging and informative content for videos, 
            presentations, and advertisements.
            </p>
          </div>
        </div>
      </div>
    </div> */}
  </>
}
