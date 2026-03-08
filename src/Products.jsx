import React, { useEffect, useState } from 'react'
import JeanJson from './jsonData/JeanJson'
import ShirtData from './jsonData/ShirtJson'
import ShoeJson from './jsonData/ShoeJson'
import TshirtJson from './jsonData/TshirtJson'
import { useParams, Link } from 'react-router-dom'
import Sub from './Sub'

export default function Products({ addToCart }) {

    const param = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        if (param.name === "shirts") {
            setData(ShirtData);
        }

        else if (param.name === "t-shirts") {
            setData(TshirtJson);
        }

        else if (param.name === "jeans") {
            setData(JeanJson);
        }

        else if (param.name === "shoes") {
            setData(ShoeJson);
        }

    }, [param.name]);


    return (
        <div className='showp container-fluid'>
            <div className="prow row">

                {data.map((product) => (

                    <div className="col-sm-6 col-lg-3 my-3" key={product.id}>

                        <Link
                            to={"/showp/" + param.name + "/" + product.id}
                            className='text-decoration-none'
                        >

                            <div className="pcard card bg-dark">

                                <img
                                    src={product.product_image}
                                    alt=""
                                    className='card-img-top ximg'
                                    height="400px"
                                />

                                <div className="card-body text-center">

                                    <h5 className='card-title text-light mt-2'>
                                        {product.product_title}
                                    </h5>

                                    <h6 className='card-text text-danger mt-3'>
                                        ₹{product.product_price}
                                    </h6>

                                    <div className="prow2 row mt-3">
                                        <div className="col-12">
                                            <button
                                                className='btn btn-warning text-light mt-2'
                                                onClick={() => addToCart(product)}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </Link>

                    </div>

                ))}

            </div>

            <Sub />

        </div>
    )
}