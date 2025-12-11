import React from 'react'
import { Link } from 'react-router-dom'

export default function Stock() {
  return (
      <div className="container-fluid rounded ">
        <h1 id="title" className=' p-3 text-center fs-1 text-light m-5'>FASHION</h1>
        <div className="row mx-2" data-aos="fade-up" data-aos-duration="3000" >
            <div className="col-md-6 col-lg-3 my-3">
                <div className="card">
                    <img id="sim" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZD6pPNP7zG94Tha2gYFv7_Vy79V6-feTHg&s"   height={"400px"} alt="" />
                    <div className="card-body text-center">
                        <h3 id="title" className='card-title text-center fs-2'>SHIRTS</h3>
                        <Link to={"/products/shirts"} className='btn btn-dark  btn-lg  my-2'>View</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
                <div className="card">
                    <img id="sim" src="https://i.pinimg.com/474x/6c/8d/01/6c8d01cf373bccb05dc94e5b57a52712.jpg"  height={"400px"} alt="" />
                    <div className="card-body text-center ">
                        <h3 id="title" className='card-title text-center fs-2'>T-SHIRTS</h3>
                        <Link to={"/products/t-shirts"} className='btn btn-dark  btn-lg  my-2'>View</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
                <div className="card">
                    <img id="sim" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9Ls0Y5tCoWrCmJ49k80DnV_HHyHtqY7hRA&s"   height={"400px"}alt="" />
                    <div className="card-body text-center">
                        <h3 id="title" className='card-title text-center fs-2'>JEANS</h3>
                    <Link to={"/products/jeans"} className='btn btn-dark  btn-lg  my-2'>View</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 my-3">
                <div className="card">
                    <img id="sim" src="https://imagescdn.reebok.in/img/app/product/9/928585-16460291.jpg?auto=format&w=390"  height={"400px"} alt="" />
                    <div className="card-body text-center">
                        <h3 id="title" className='card-title text-center fs-2'>SHOES</h3>
                        <Link to={"/products/shoes"} className='btn btn-dark  btn-lg  my-2'>View</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
