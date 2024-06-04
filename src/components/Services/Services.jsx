import React from 'react'
import "../Services/services.css"
import car1 from "../../images/carousal-img/banner20.jpg";

import car2 from "../../images/carousal-img/book10.jpg";

import car3 from "../../images/carousal-img/brochure10.jpg";

import car4 from "../../images/carousal-img/menu20.jpg";

import car5 from "../../images/carousal-img/pack10.jpg";

import car6 from "../../images/carousal-img/profile10.jpg";

import car7 from "../../images/carousal-img/social20.jpg";

import car8 from "../../images/carousal-img/tshirt10.jpg";

import car9 from "../../images/carousal-img/clogo20.jpg";
import video1 from"../../images/motion/motion3.mp4"

export default function Services() {
  return<>
  
    <div className='container mh my-5'>
      <div className="row text-center mb-2  justify-content-center">
        <h2 className="section-heading py-2 ">Our Services</h2>
      </div>
      <div className="row">
        <div className="col-md-4 column">
          <div className="card">
            <div className="img-wrapper">
              <img className='w-100 ' src={car9} alt="" />
            </div>
            <h3>Logo Design</h3>
            <p>
            Visual representation, brand identity, memorable, simplicity, versatility, 
            recognition, symbolism, professionalism, brand values, creative expression.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car8} alt="" />
            </div>
            <h3>T-Shirts Design</h3>
            <p>
            T-Shirt Design, creativity, individual expression, style, graphic design, 
            colors, illustrations, patterns, uniqueness, comfort.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car7} alt="" />
            </div>
            <h3>social media design <span className='fs-5'> Facbook-Instagram-Twitter</span></h3>
            <p>
            Social media design, branding, visual consistency, engagement, aesthetics, storytelling, 
            user experience, graphics, typography, responsiveness.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car6} alt="" />
            </div>
            <h3>Profile Design</h3>
            <p>
            Profile Design involves creating a visually engaging and cohesive representation of 
            an individual or brand on various platforms.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car5} alt="" />
            </div>
            <h3>Package Design</h3>
            <p>
            Package design refers to the process of creating the visual and functional elements of product packaging. 
            
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car4} alt="" />
            </div>
            <h3>Menus Design</h3>
            <p>
            Menu design involves creating visually appealing and user-friendly menus for restaurants, 
            cafes, or other food establishments. 
            
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car3} alt="" />
            </div>
            <h3>Advertising design <span className='fs-5'>brochure - flyer  </span></h3>
            <p>
            Brochure design involves creating visually appealing and informative printed materials used for 
            marketing and promotional purposes.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car2} alt="" />
            </div>
            <h3>Book Cover Design</h3>
            <p>
            Cover design refers to the process of creating visually appealing and engaging 
            covers for various types of media, 
            including books, magazines, albums, and more.
            </p>
          </div>
        </div>
        <div className="col-md-4 column">
          <div className="card">
          <div className="img-wrapper">
              <img className='w-100' src={car1} alt="" />
            </div>
            <h3>Outdoor Design  <span className='fs-5'><br/> banner - billboard</span></h3>
            <p>
            Banner design refers to the process of creating visually appealing and attention-grabbing banners 
            used for advertising and promotional purposes.
            </p>
          </div>
        </div>
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
    </div>
  
  </>
}
