
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import './recent.css';
import { Autoplay, Pagination, Navigation,EffectCreative } from 'swiper/modules';
import {useGetRecentsQuery } from "../../../Redux/services/recent";

export default function Recent() {
  const { data, isFetching ,isSuccess} = useGetRecentsQuery();
  if (data){
    console.log(data.recentModels)
    
  }
  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      if (data.recentModels[index] && data.recentModels[index].image) {
        return `<span class="${className}"><img src="${data.recentModels[index].image}" alt="" /></span>`;
      } else {
        return `<span class="${className}"></span>`;
      }
    },
  };

  return (
    <>

{isFetching ? (
        <div id="loading-wrapper">
          <div id="loading-text">LOADING</div>
          <div id="loading-content"></div>
        </div>
      ) :<div className="">
      <Swiper
      slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        simulateTouch={true}
        navigation={true}
        loop={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          }}}
        modules={[Autoplay, Pagination, Navigation,EffectCreative]}
        className="mySwiper"
      >
        {data?.recentModels.map((item) => (
          <SwiperSlide key={item._id}><img src={item.image} alt="" /></SwiperSlide>


        ))}
      </Swiper>
      </div>}
      
    </>
  );
}
