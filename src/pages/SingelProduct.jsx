import React from 'react'
import Header from '../comman/Header'
import { useLocation, useParams } from 'react-router-dom'

export default function SingelProduct(props) {
    const {id} = useParams();
    console.log(id);
    let useRout=useLocation()
    console.log(useRout);
  return (
    <>
     <Header/>
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                              <img className='img-fluid w-100' src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} alt="" />
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-3 gx-1">
                                <div className="col-lg-3">
                                     <img className='img-fluid' src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} alt="" />
                                </div>
                                <div className="col-lg-3">
                                     <img className='img-fluid' src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} alt="" />
                                </div>
                                <div className="col-lg-3">
                                     <img className='img-fluid' src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} alt="" />
                                </div>
                                <div className="col-lg-3">
                                     <img className='img-fluid' src={"https://i.dummyjson.com/data/products/1/thumbnail.jpg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className='d-flex justify-content-between'>
                        <span className='fs-5'> title - iPhone 9</span>
                        <span className='fs-5'> Rating - 4.5</span>
                    </div>
                    <p>An apple mobile which is nothing like apple</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
