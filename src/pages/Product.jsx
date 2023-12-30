import React, { useContext, useEffect, useState } from 'react'
import Header from '../comman/Header'
import axios, { Axios } from 'axios'
import { Link } from 'react-router-dom'
import { cartContaxt } from '../contaxt/MainContaxt'
import {NotificationContainer, NotificationManager} from 'react-notifications';


export default function Product() {
    let [loding, setLoding] = useState(false)
    let [product, setProduct] = useState([])
    let getProduct = () => {
        setLoding(true)
        axios.get('https://dummyjson.com/products')
            .then((res) => res.data)
            .then((finelRes) => {
                setProduct(finelRes.products);
                setLoding(false)
            })
    }
    useEffect(() => {
        getProduct()
    }, [])

    let allProduct = product.map((v, i) => {
        return (
            <CartItems pData={v} key={i} />
        )
    })
    // console.log(product);
    return (
        <div>
            <Header />
            <h1 className='text-center py-4'>Product</h1>

            <div className="container">
                <div className="row gy-4">
                    {
                        loding == true ?
                        <div className='mx-auto text-center'>
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                <span role="status">Loading...</span>
                            </button>
                        </div> 
                        :
                        
                        allProduct 
                        
                            
                           
                    }
                </div>
            </div>
            <NotificationContainer/>
        </div>
    )
}

let CartItems = ({ pData }) => {
    let{cart,setCart}=useContext(cartContaxt)
    let addToCart=()=>{
        let filterCart=cart.filter((v,i)=>v.title==pData.title);
        if(filterCart.length==1){
              let filterCartQty=cart.map((v,i)=>{
                if (v.title==pData.title) {
                    v.qty=v.qty+1
                }
                return v;
              })
              setCart(filterCartQty)
              NotificationManager.success(`${pData.title} qty Update in your Cart`)
        }
        else{
            let cartData={
                title:pData.title,
                price:pData.price,
                rating:pData.rating,
                qty:1,
                thumbnail:pData.thumbnail
            }
            setCart([...cart,cartData])
            NotificationManager.success(`${pData.title} is add your Cart`)
        }
       
    }

    return (
        <div className="col-lg-3">
            <div className="card">
                <img src={pData.thumbnail} className="card-img-top" alt="..." style={{ height: 250 }} />
                <div className="card-body">
                    <div className='d-flex justify-content-between py-2'>
                        <span>Price - {pData.price}</span>
                        <span>Rating - {pData.rating}</span>
                    </div>
                    <h5 className="card-title">{pData.title}</h5>
                    <p className="card-text">{pData.description.slice(0, 50)}...</p>
                    <div className='d-flex justify-content-between'>
                    <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                    <Link  to={`/SingleProduct/${pData.id}`} className="btn btn-primary">show</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
