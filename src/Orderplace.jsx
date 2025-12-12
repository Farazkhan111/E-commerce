import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Orderplace() {
  var nav=useNavigate();
  

  setTimeout(()=>{

    nav("/")
  },4000)

  

  return (
    <>
    <div className='confp mt-5 '>
      <div className="row mt-5"></div>
      <div className="row mt-5"></div>
      {/* <div className="row mt-5"></div> */}
      {/* <div className="row mt-5"></div>   */}
      
        <img className='mt-5 img-fluid rounded-5'  src="https://cdn.dribbble.com/userupload/25034830/file/original-eabff5d98a68ab76901346d02b4075d7.gif" alt="" />
    </div>
    </>
  )
}
