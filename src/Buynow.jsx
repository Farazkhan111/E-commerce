import React, { useEffect, useState } from 'react'
import './Style2.css'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Buynow({ cartData }) {

  const [atot, setTot] = useState(0);
  var navv = useNavigate();
  useEffect(() => {
    var tot = 0;
    cartData.forEach((tcart) => {
      tot += (tcart.product_price * tcart.product_quantity);
      console.log(tot);
    })
    setTot(tot);
  })
  function nav() {
    navv("/orderplace");
  }
  return (
    <div className='bymain py-5'>
      <form >
        <div className=' container-fluid pt-5'>
          <div className=" row ">
            <div className="col-md-6 text-light">
              <h6 className='headm '>Contact Information</h6>
              <h6 className='formi '>Email</h6>
              <input className='form-control' type="email" required placeholder='' />
              <h6 className='headm'>SHOPPING ADDRESS</h6>
              <h6 className='formi'>Full Name</h6>
              <input className='form-control' type="text" required placeholder='' />
              <h6 className='formi'>Address</h6>
              <input className='form-control' type="text" required placeholder='' />
              <div className="row ">
                <div className="col-sm-4">
                  <h6 className='formi'>City</h6>
                  <input className='form-control' type="text" required placeholder='' />
                </div>
                <div className="col-sm-4">
                  <h6 className='formi'>State</h6>
                  <input className='form-control' type="text" required placeholder='' />
                </div>
                <div className="col-sm-4">
                  <h6 className='formi'>Zip Code</h6>
                  <input className='form-control' type="number" required placeholder='' />
                </div>
              </div>
              <h6 className='formi'>Country</h6>
              <input className='form-control' type="text" required placeholder='' />
              <h6 className='headm '>Payment info</h6>
              <h6 className='formi'>Card Number</h6>
              <input className='form-control' type="number" required placeholder='' />
            </div>


            {/* ========================================================================================================= */}

            <div className="col-md-6">
                <div className='order mt-5'>
                  <table className='table table-bordered text-center table-dark'>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Product price</th>
                        <th>Product Quantity</th>


                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartData.map((data, index) => (

                          <tr>
                            <td className=''>{index + 1}</td>
                            <td className=''>{data.product_title}</td>
                            <td ><img src={data.product_image} alt="" width={"50px"} className='rounded' /></td>
                            <td>{data.product_quantity}</td>
                            <td className='text-info '>₹ {(data.product_price) * (data.product_quantity)}</td>

                          </tr>

                        ))

                      }
                    </tbody>
                  </table>
                </div >
                <div className='pdiv text-center mt-5'>

                  <h1 className='fs-1 text-light'>Total = ₹   {atot}</h1>
                  <button type="button" onClick={nav} className='btn btn-primary mt-5 btn-lg text-light px-5 fs-3'>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        
      </form>
    </div >
  )
}
