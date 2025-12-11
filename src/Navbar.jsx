import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import logo from './Logo/Gemini_Generated_Image_2laa422laa422laa.png';

export default function Navbar({ len }) {
    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-sm  fixed-top mt-3 mx-3">
                <div
                    className="container-fluid py-2 rounded"
                    style={{
                        backgroundColor:
                            location.pathname === "/"
                                ? "rgba(0,0,0,0.797)"
                                : "rgba(57,57,57,0.797)"
                    }}
                >
                    {/* TOP ROW: Logo - Toggler - Cart */}
                    <div className="d-flex align-items-center mx-auto w-100 position-relative">

                        {/* LEFT - LOGO */}
                        <Link to="/" className="navbar-brand text-light me-auto">
                            <img src={logo} alt="" width="40px" className="llimg me-3" />
                            <span className="nlogo">ΓΛRΛZ</span>
                        </Link>

                          {/* DESKTOP MENU - always visible on sm+ */}
                       

                        
                         <ul className="navbar-nav mx-auto d-none d-sm-flex gap-4 ">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown  ">
                            <Link className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">
                                Category
                            </Link>
                            <ul className="dropdown-menu nav-bg mt-2 " >
                                <li><Link className="dropdown-item text-light" to="/products/shirts">Shirts</Link></li>
                                <li><Link className="dropdown-item text-light" to="/products/t-shirts">T-Shirts</Link></li>
                                <li><Link className="dropdown-item text-light" to="/products/jeans">Jeans</Link></li>
                                <li><Link className="dropdown-item text-light" to="/products/shoes">Shoes</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">Service</Link>
                        </li>
                    </ul>
                   

                        {/* CENTER - TOGGLER (mobile only) */}
                        <button
                            className="navbar-toggler d-sm-none bg-light   mx-auto"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mobileMenu"
                        >
                            <span className="navbar-toggler-icon text-light bg-light"></span>
                        </button>

                        {/* RIGHT - CART */}
                        <div className="ms-auto mx-2">
                            <Link to="/cart">
                                <button className="btn position-relative">
                                    <FaCartShopping className="text-light fs-3" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {len}
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                  
                    {/* MOBILE COLLAPSE MENU */}
                    <div className="collapse d-sm-none mt-2 mx-auto" id="mobileMenu">
                        <ul className="navbar-nav text-center gap-3">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown position-static">
                                <Link className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">
                                    Category
                                </Link>
                                <ul className="dropdown-menu nav-bg" style={{ zIndex: 9999 }}>
                                    <li><Link className="dropdown-item text-light" to="/products/shirts">Shirts</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/t-shirts">T-Shirts</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/jeans">Jeans</Link></li>
                                    <li><Link className="dropdown-item text-light" to="/products/shoes">Shoes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}
