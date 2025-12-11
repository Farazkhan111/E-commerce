import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import logo from './Logo/Gemini_Generated_Image_2laa422laa422laa.png';

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

        {/* TOP BAR (LOGO - TOGGLER - CART) */}
        <div className="d-flex align-items-center w-100 position-relative">

            {/* LEFT - LOGO */}
            <Link to="/" className="navbar-brand text-light">
                <img src={logo} width="40px" className="llimg me-3" />
                <span className="nlogo">ΓΛRΛZ</span>
            </Link>

            {/* CENTER - TOGGLER (ONLY MOBILE) */}
            <button
                className="navbar-toggler mx-4 bg-light position-absolute start-50 translate-middle-x d-sm-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* RIGHT - CART */}
           

        {/* SINGLE MENU FOR BOTH MOBILE & DESKTOP */}
        <div className="collapse navbar-collapse mt-0" id="mainNav">

            <ul className="navbar-nav mx-sm-auto text-center d-sm-flex gap-sm-4">

                <li className="nav-item">
                    <Link className="nav-link text-light" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle text-light" data-bs-toggle="dropdown">
                        Category
                    </Link>
                    <ul className="dropdown-menu nav-bg">
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
         <div className="ms-auto mx-2">
                <Link to="/cart">
                    <button className="btn position-relative">
                        <FaCartShopping className="text-light fs-3" />
                        <span className="position-absolute top-0 start-100  translate-middle badge bg-danger">
                            {len}
                        </span>
                    </button>
                </Link>
            </div>
        </div>

    </div>
</nav>


            <Outlet />
        </>
    );
}
