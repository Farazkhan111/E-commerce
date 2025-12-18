import React, { useEffect, useState } from 'react'
import JeanJson from './jsonData/JeanJson'
import ShirtData from './jsonData/ShirtJson'
import ShoeJson from './jsonData/ShoeJson'
import TshirtJson from './jsonData/TshirtJson'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Sub from './Sub'
export default function Products({addToCart}) {
    const param = useParams();
    const [data, setData] = useState([]);

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
    });


    return (
        <div className='showp container-fluid'>
            <div className="prow row ">
                {
                    data.map((Products) => (
                        <div className="col-sm-6 col-lg-3 my-3">
                            {/* <div className="pcard card" >
                                <img className='pimg ' src={Products.product_image} alt="" />
                                <h1>{Products.product_name}</h1>
                            </div> */}
                            <Link to={"/showp/"+param.name+"/"+Products.id} className='text-decoration-none'> <div className="pcard card ">
                                 <img src={Products.product_image} alt="" className='card-img-top' height="400px" />
                                <div className="card-body text-center">
                                    <h5 className='card-title text-light mt-2'>{Products.product_title}</h5>
                                    <h6 className='card-text  text-danger mt-3'>₹{Products.product_price}</h6>
                                    <div className="prow2 row mt-3">
                                        <div className="col-12">
                                            <button className='btn btn-warning text-light mt-2 ' onClick={()=>addToCart(Products)}>Add to cart</button>
                                        </div>
                                        {/* <div className="col-6">
                                            <Link to={"/showp/"+param.name+"/"+Products.id} className="btn btn-info mt-2" >Details</Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <Sub/>
        </div>
    )
}
