import React from 'react'
import Img from './Img'
import Stock from './Stock'
import Img2 from './Img2'
import Aos from 'aos'
import { useEffect } from 'react'
import Img3 from './Img3'
import Slider from './Slider'
import Sub from './Sub'
export default function Home() {
    useEffect(()=>{
    Aos.init();
  },[]);
  return (
    // <div id='home' className='home '>
    <div id='home' className='home '>
      <Img/>
      <Stock/>
      <Img2/>
      <Img3/>
      <Slider/>
      <Sub/>
    </div>
  )
}
