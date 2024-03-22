import React from 'react'
import logo1 from "../../images/Partener-logo/logo1.jpg";
import logo2 from "../../images/Partener-logo/logo2.jpg";
import logo3 from "../../images/Partener-logo/logo3.jpg";
import logo4 from "../../images/Partener-logo/logo4.jpg";
import logo5 from "../../images/Partener-logo/logo5.jpg";
import logo6 from "../../images/Partener-logo/logo6.jpg";
import logo7 from "../../images/Partener-logo/logo7.jpg";
import logo8 from "../../images/Partener-logo/logo8.jpg";
import logo9 from "../../images/Partener-logo/logo9.jpg";
import logo10 from "../../images/Partener-logo/logo10.jpg";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from './Partners.module.css'

export default function Partners() {
    
  return <>
  <div className="row mt-5 mb-4 ">
        <div className="mt-5 pt-2 mb-2 success  ">
          <h2>Success Partners</h2>
        </div>
      </div>
      <div className="row mb-5 pb-5 mt-2">
      <Splide
      options={ {
        type:'loop',
        perPage:3,
        perMove:1,
        gap:100,
        height:'10%',
        width:'100%',
        pagination:false,
        arrows:false,
        autoplay:true,
        dragMinThreshold: {
          mouse: 0,
          touch: 10,
        },
        lazyLoad:'nearby',
        speed:2000,
        interval:2000,
        breakpoints: {
          1024: {
          perPage:2,
          },
          520: {
            perPage:1,
            padding:'50px'
            },
      }
        
      } }
      aria-label="My Favorite Images"
    >
      
      <SplideSlide>
        <img className=' imge-praps m-auto' src={logo1} alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo2} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo3} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo4} alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo5} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo6} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo7} alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo8} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo9} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img className=' imge-praps' src={logo10} alt="Image 2"/>
      </SplideSlide>
    </Splide>
      </div>
    
  </>
}
