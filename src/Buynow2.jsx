import React, { useEffect, useState } from 'react'
import './Style2.css'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import JeanJson from './jsonData/JeanJson'
import ShirtData from './jsonData/ShirtJson'
import ShoeJson from './jsonData/ShoeJson'
import TshirtJson from './jsonData/TshirtJson'
import Sub from './Sub'
export default function Buynow2() {
    const param=useParams();
    const [data, setData] = useState([]);
    const [qun , setQun] = useState()
    const [price , setPri]= useState();
   
  var navv = useNavigate();
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
         setQun(param.qu);
         setPri(param.pr)

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
                        <th>Product Quantity</th>
                        <th>Product price</th>


                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((data) => (
                            param.no==data.id ?
                            <>
                          <tr>
                            <td className=''>{1}</td>
                            <td className=''>{data.product_title}</td>
                            <td ><img src={data.product_image} alt="" width={"50px"} className='rounded' /></td>
                            <td>{param.qu}</td>
                            <td className='text-info '>₹ {(data.product_price) * (qun)}</td>

                          </tr>
                          </>
                          :
                          <>
                          </>

                        ))

                      }
                    </tbody>
                  </table>
                </div >
                <div className='pdiv text-center mt-5'>

                  <h1 className='fs-1 text-light'>Total = ₹ {(price)*(qun)}</h1>
                  <button type="button" onClick={nav} className='btn btn-primary mt-5 btn-lg text-light px-5 fs-3'>Place Order</button>
                </div>
              </div>
            </div>
          </div>
        
      </form>
    </div >
  )
}
