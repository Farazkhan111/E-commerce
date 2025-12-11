import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import logo from './Logo/Gemini_Generated_Image_2laa422laa422laa.png'
export default function Navbar({ len }) {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top mt-3">
                <div
                    className="container-fluid py-2 rounded mx-4"
                    style={{
                        backgroundColor:
                            location.pathname === "/"
                                ? "rgba(0,0,0,0.797)"
                                : "rgba(57,57,57,0.797)"
                    }}
                >
                 {/* <span '></span> */}
                 <Link to={'/'} className='navbar-brand text-light'><img src={logo} alt=""  width={"40px"}  className='llimg me-3' /><span className='nlogo'>ΓΛRΛZ</span></Link>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* COLLAPSE MENU */}
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mx-auto text-center">

                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown mx-3">
                                <Link className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown">
                                    Category
                                </Link>
                                <ul className="dropdown-menu nav-bg">
                                    <li><Link className="dropdown-item text-light" to="/products/shirts">Shirts</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/t-shirts">T-Shirts</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/jeans">Jeans</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/shoes">Shoes</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link text-light" to="#">Service</Link>
                            </li>

                            {/* CART INSIDE TOGGLE (visible only on mobile) */}
                            <li className="nav-item mt-3 d-sm-none">
                                <Link to="/cart" className="d-flex justify-content-center">
                                    <button type="button" className="btn position-relative">
                                        <FaCartShopping className="text-light fs-3" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {len}
                                        </span>
                                    </button>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* CART ON RIGHT (visible only on desktop) */}
                    <Link to="/cart" className="d-none d-sm-flex">
                        <button type="button" className="btn position-relative">
                            <FaCartShopping className="text-light fs-3" />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {len}
                            </span>
                        </button>
                    </Link>

                </div>
            </nav>

            <Outlet />
        </>
    );
}
