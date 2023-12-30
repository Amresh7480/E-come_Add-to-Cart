import React, { useContext } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { cartContaxt } from '../contaxt/MainContaxt';

export default function Header() {
    let {cart}=useContext(cartContaxt)
    return (
        <header className='bg-primary position-sticky top-0 z-3'>
            <div className="container bg-primary">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light fs-2" href="#">E-Commerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item pe-3">
                                <Link to={'/'} className="nav-link text-light fw-medium" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item pe-3">
                                <Link to={'/Product'} className="nav-link text-light fw-medium">Product</Link>
                            </li>
                            <li className="nav-item position-relative">
                                <Link to={'/Cart'} className="nav-link text-light fw-medium">Cart <small className='fs-3'><FaCartArrowDown/></small>  </Link>
                                <span className='card_count position-absolute '>{cart.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </header>
    )
}
