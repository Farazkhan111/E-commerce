import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Cart({ cartData, setCart }) {
  const [atot, setTot] = useState(0);
  useEffect(() => {
    var tot = 0;
    cartData.forEach((tcart) => {
      tot += (tcart.product_price * tcart.product_quantity);
      console.log(tot);
    })
    setTot(tot);
  })

  function remove(id) {
    // alert("Deleted: "+id);
    const newCartData = cartData.filter((mydata, index) => index != id);
    setCart(newCartData);
  }

  function quanChange(data, a) {
    var x;
    cartData.forEach((carts, index) => {
      if (carts.id == data.id) {
        x = index;
      }
    });

    cartData[x].product_quantity += a;
    if (cartData[x].product_quantity == 0) {
      cartData[x].product_quantity = 1;
    }
    setCart([...cartData]);
  }

  return (
    <div className='cart  container-fluid'>
      <div className="row"></div>
      {
        cartData.length == 0 ? <><div className='ecart'><div className="row"></div> <div className='row mt-5 '><h1 className='eh1 text-center  text-light'>Cart is empty</h1></div></div></> :
          <div className="table-responsive">
            <table className='tab table table-bordered text-center table-dark'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Product name</th>
                  <th>Product image</th>
                  <th>Product price</th>
                  <th>Product quantity</th>
                  <th>Total</th>
                  <th>View</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartData.map((data, index) => (

                    <tr>
                      <td className='p-5'>{index + 1}</td>
                      <td className='p-5'>{data.product_title}</td>
                      <td c><img src={data.product_image} alt="" width={"100px"} className='rounded' /></td>
                      <td className='text-info p-5'>₹ {data.product_price}</td>
                      <td className='p-5'>

                        <button className='btn btn-danger  btn-sm text-light m-3' onClick={() => quanChange(data, -1)}>-</button>
                        <span>{data.product_quantity}</span>
                        <button className='btn btn-danger  btn-sm text-light m-3' onClick={() => quanChange(data, +1)}>+</button>
                      </td>
                      <td className='text-info p-5'>₹ {data.product_price * data.product_quantity}</td>
                      <td><button className='btn btn-danger m-5'>View</button></td>
                      <td><button className='btn btn-danger m-5' onClick={() => remove(index)}>Remove</button></td>
                    </tr>

                  ))

                }
              </tbody>
            </table>
            <footer class="fixed-bottom bg-dark ">
              <div class=" bg-dark text-center p-2">
                <div className="row">
                  <div className="col-sm-6">
                    <h1 className='text-warning fs-2'>Total :- ₹ {atot}</h1>

                  </div>
                  <div className="col-sm-6">

                    <Link to={"/buynow"}>
                      <button className='btn btn-danger btn-lg'>Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
      }

    </div>
  )
}
