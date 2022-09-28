import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/sliceReducer/productSlice'

import { v4 as uuidv4 } from 'uuid';
import './mainProduct.scss'
import { ProductModel } from '../../../types/products';

interface props {
    posts:ProductModel
}

export default function MainProduct(props:props) {
    const dispatch = useDispatch();
    const product = props.posts;
    const numRating= props.posts.rating
    console.log(typeof(numRating))

    const handleClickAdd =()=>{
        dispatch(addProduct({
            product
        }))
    }
    const renderStar=()=>{
        let starts=[];
        for(let i=0;i<numRating;i++){
            starts.push( <p>⭐</p>  )
        }
        return starts
    }
  return (
            <div className='product-desc'>
                <div className="product-info">
                        <p>{props.posts.title}</p>
                        <p className='product-price'>
                            <small>$  </small>
                            <strong>{props.posts.price}</strong>
                        </p>
                        <div className="product-rating">
                           {renderStar()}
                        </div>
                </div>
                <img src={props.posts.img} alt="" />
                <button className='addProduct-button' onClick={handleClickAdd}>Add to Basket</button>
            </div>
        
  )
}
