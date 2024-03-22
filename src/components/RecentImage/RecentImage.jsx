import { SplideSlide } from '@splidejs/react-splide'
import React from 'react'

function RecentImage({data}) {



  return (
    <>
        <img loading='lazy' className='w-100 h-100' src={data.image} alt="Image 1"/>
    </>
  )
}

export default RecentImage