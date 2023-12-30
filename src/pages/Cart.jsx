import React, { useContext, useState } from 'react'
import Header from '../comman/Header'
import { CiStar } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { cartContaxt } from '../contaxt/MainContaxt';


export default function Cart() {
    let { cart } = useContext(cartContaxt)
    let totlePrice = 0.00
    cart.forEach(element => {
        totlePrice +=(element.qty) * (element.price)
    })
     
    let AllAddCart = cart.map((v, i) => {
        return (
            <AddCartItems CartDatale={v} index={i} key={i} />
        )
    })
    return (
        <div>
            <Header />
            <h1 className='text-center py-4'>Cart</h1>

            <div className="container">
                <div className="row gy-2">
                    <div className="col-xl-8">{
                        AllAddCart.length > 0 ? AllAddCart : "No Data Found"
                    }



                        <div className="row my-4">
                            <div className="col-sm-6">
                                <a href="ecommerce-products.html" className="btn btn-link text-muted">
                                    <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end mt-2 mt-sm-0">
                                    <a href="ecommerce-checkout.html" className="btn btn-success">
                                        <i className="mdi mdi-cart-outline me-1"></i> Checkout </a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="mt-5 mt-lg-0">
                            <div className="card border shadow-none">
                                <div className="card-header bg-transparent border-bottom py-3 px-4">
                                    <h5 className="font-size-16 mb-0">Order Summary <span className="float-end">#MN0124</span></h5>
                                </div>
                                <div className="card-body p-4 pt-2">

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td className="text-end">$ {cart.Price}</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount : </td>
                                                    <td className="text-end">- $ {cart.qty}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td className="text-end">$ 25</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax : </td>
                                                    <td className="text-end">$ 18.20</td>
                                                </tr>
                                                <tr className="bg-light">
                                                    <th>Total :</th>
                                                    <td className="text-end">
                                                        <span className="fw-bold">
                                                            $ {totlePrice}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <!-- end table-responsive --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}

            </div>

        </div>
    )
}
let AddCartItems = ({ CartDatale, index }) => {
    let [qutValue, setQutValue] = useState(CartDatale.qty)
    let { cart, setCart } = useContext(cartContaxt)
    // let increaseQty = () => {
    //     if (qutValue >= 1) {
    //         setQutValue(qutValue + 1)   
    //     }
    // }
    // let decreaseQty = () => {
    //     if (qutValue > 1) {
    //         setQutValue(qutValue - 1)
    //     }
    // }
    let changeQty=(event)=>{
        setQutValue(event.target.value)
        let qtyFilter=cart.filter((v,i)=>{
            if (i==index) {
                v.qty=event.target.value
            }
            return v;
        })   
        setCart(qtyFilter)
    }
   
    let cartItemsDelete = () => {
        let cartFilterData = cart.filter((v, i) => i != index)
        setCart(cartFilterData)

    }


    return (
        <div className="card border shadow-none mb-4">
            <div className="card-body">

                <div className="d-flex align-items-start border-bottom pb-3">
                    <div className="me-4">
                        <img className='img-fluid avatar-lg rounded' src={CartDatale.thumbnail} alt="" style={{ width: 200 }} />
                    </div>
                    <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                            <h5 className="text-truncate font-size-18"><a href="#" className="text-dark">{CartDatale.title} </a></h5>
                            <p className="text-muted mb-0">
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                                <CiStar />
                            </p>
                            <p className="mb-0 mt-1">Color : <span className="fw-medium">Gray</span></p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 ms-2">
                        <ul className="list-inline mb-0 font-size-16">
                            <li className="list-inline-item px-1 btn" onClick={cartItemsDelete}>
                                <MdDelete />
                            </li>
                            <li className="list-inline-item px-1 btn">
                                <FaRegHeart />
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Price</p>
                                <h5 className="mb-0 mt-2"><span className="text-muted me-2"><del className="font-size-16 fw-normal">$500</del></span>${CartDatale.price}</h5>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Quantity</p>
                                <div className="d-inline-flex border border-1 rounded">
                                    {/* <button className='qut_btn' onClick={decreaseQty}>-</button> */}
                                        <input className='qut_btn' onChange={changeQty} value={qutValue} type="number" />
                                        {/* <span className='qut_btn'>{qutValue}</span> */}
                                    {/* <button className='qut_btn' onClick={increaseQty}>+</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mt-3">
                                <p className="text-muted mb-2">Total</p>
                                <h5>${(CartDatale.price) * (qutValue)}</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
