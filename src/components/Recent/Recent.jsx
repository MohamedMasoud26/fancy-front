import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from "react";
import axios from "axios";
// import RecentImage from "../RecentImage/RecentImage";
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper/modules';

import  Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
export default function Recent() {
  const [recent, setRecent] = useState([]);



  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      modules:[Navigation, Pagination, Scrollbar, A11y],
      effect:'coverflow',
      slidesPerView:1,
      loop: true,
      autoplay:true,
      navigation:{clickable:true},
      pagination:{el:'.swiper-pagination', clickable: true },
      // If you have more options, you can add them here
    });

    return () => {
      // Destroy Swiper instance when component unmounts
      swiper.destroy();
    };
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/recent")
      .then(response => {
        console.log(response.data.recentModels)
        setRecent([...response.data.recentModels]);
      })
      .catch(error => {
        console.error('Error fetching recent:', error);
      });

    
  }, []); 
  // Add 'recent' as a dependency to re-run the effect when 'recent' changes
  

  return (
    <>

<div className="swiper-container">
      <div className="swiper-wrapper">
      {recent.map((item) => (
                <SwiperSlide key={item._id} className='img-props'>
                          <img className='w-100 h-100' src={item.image} alt="Image 1"/>
                          <div style={{color:'red'}} className="swiper-pagination"></div>
                </SwiperSlide>
              ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      effect={'coverflow'}
      slidesPerView={1}
      loop= {true}
      autoplay={true}
      navigation={{clickable:true}}
      pagination={{el:'.swiper-pagination', clickable: true }}
    >
      {recent.map((item) => (
                <SwiperSlide key={item._id} className='img-props'>
                          <img className='w-100 h-100' src={item.image} alt="Image 1"/>
                          <div style={{color:'red'}} className="swiper-pagination"></div>
                </SwiperSlide>
              ))}
    </Swiper>
       */}
        {/* <div className="">
          <div className="row rounded-3">
            <div className="mb-2 Recent ">
              <h2 className='pt-1'>Recent works</h2>
            </div>
          </div>
          <div className="row mb-4 pb-4">
            <Splide
              options={{
                type: 'loop',
                heightRatio: .45,
                autoplay: true,
                dragMinThreshold: {
                  mouse: 0,
                  touch: 1,
                },
                lazyLoad: 'nearby',
                speed: 2000,
                interval: 2000,
              }}
              aria-label="My Favorite Images"
            >
              {recent.map((item) => (
                <SplideSlide key={item._id} className='img-props'>
                          <img loading='lazy' className='w-100 h-100' src={item.image} alt="Image 1"/>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div> */}
      
    </>
  );
}
