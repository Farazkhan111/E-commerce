import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JeanJson from './jsonData/JeanJson'
import ShirtData from './jsonData/ShirtJson'
import ShoeJson from './jsonData/ShoeJson'
import TshirtJson from './jsonData/TshirtJson'
import Sub from './Sub'
export default function Showp({addToCart}) {
  const param = useParams();
  const [data, setData] = useState([]);
  const [qun, setQun] = useState(1)

  useEffect(() => {
    if (param.name == "shirts") {
      // console.log(ShirtData);
      setData(ShirtData);
    }
    else if (param.name == "t-shirts") {
      // console.log(TshirtJson);
      setData(TshirtJson);

    }
    else if (param.name == "jeans") {
      // console.log(JeanJson);
      setData(JeanJson);

    }
    else if (param.name == "shoes") {
      // console.log(ShoeJson);
      setData(ShoeJson);

    }
  })
  function less() {
    if (qun > 1) {
      setQun(qun - 1);
    }
    else {
      setQun(1);
    }
  }
  function add() {
    if (qun < 50) {
      setQun(qun + 1);
    }
    else {
      setQun(1);
    }
  }
  return (
    <div className='dpage container-fluid'>
      <div className="row py-5"></div>
      <div className="row">
        {
          data.map((Product) => (
            param.no == Product.id ?
              <>
                <div className='col-md-6 text-center '>
                  <img className="dimg img-fluid rounded-5" src={Product.product_image} alt="" />
                </div>
                <div className="col-md-6 text-center text-light ">
                  <h3 className='card-title mt-5 fs-1 text-warning'>{Product.product_title}</h3>
                  <h5 className='card-title mt-4 fs-6 text-light'>{Product.product_name}</h5>
                  <h5 className='mt-4 text-warning'>Rating:-4.5/5</h5>
                  <div className="row mt-4">
                    <h5 >Choose color</h5>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 mt-4">
                      <button className='cbtn1 cb  btn  mx-2 '></button>
                      <button className='cbtn2 cb btn  mx-2 '></button>
                      <button className='cbtn3 cb btn  mx-2 '></button>
                      <button className='cbtn4 cb btn  mx-2 '></button>
                      <button className='cbtn5 cb btn  mx-2 '></button>
                      <button className='cbtn6 cb btn  mx-2 '></button>
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                  <div className="row mt-4">
                    <h5>Select Size</h5>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8  mt-4">
                      <div className="row justify-content-center">
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>S</button>
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>M</button>
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>L</button>
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>XL</button>
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>XXL</button>
                        <button className='btn btn-warning text-light mx-1 my-2 col-3 '>XXXL</button>
                      </div>
                    </div>
                    <div className="col-sm-2"></div>
                  </div>
                  <h5 className='mt-5'>Price:-<span className='mx-2 text-info'>₹{Product.product_price}</span></h5>
                  <h5 className=' mt-5'>Stock Quantity :- {Product.product_stock}</h5>
                  <div className="row ">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 mt-5">
                      <div className="row justify-content-center" >
                        <button className='qbtn btn btn-danger text-light col-4' onClick={less}>-</button>
                        <span className='text-light col-4'>{qun}</span>
                        <button className='qbtn btn btn-success text-light col-4' onClick={add}>+</button>
                      </div>
                    </div>
                    <div className="col-sm-4"></div>
                  </div>
                  <div className="row mt-5">
                    <div className="dbox3 col-sm-6">
                      <button className='btn btn-warning text-light btn-lg ' onClick={()=>addToCart(Product)}>Add to Cart</button>
                    </div>
                    <div className='dbox4 col-sm-6'>
                      <button className='btn btn-info text-light btn-lg'>Buy Now</button>
                    </div>
                  </div>
                  <div className="des mt-4 ">
                    <h4 className='text-left text-warning mt-5'>Description </h4>
                    <h6 className='des1 mt-3 fs-6  '>{Product.product_description}</h6>
                  </div>
                </div>
              </>
              :
              <>
              </>
          ))
        }
      </div>
      <Sub />
    </div>
  )
}
