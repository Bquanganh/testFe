import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../../../redux/sliceReducer/productSlice'
import "./cardProduct.scss"

interface Props {
    id:string,
    title:string,
    price:number,
    rating:number,
    img:string,
    status?:string
}

function CardProduct({id,title,price,rating,img}:Props) {
    
    const dispatch = useDispatch()
    const handleClickRemove =()=>{
        dispatch(removeProduct({id,price}))
    }

    return (

        <div className="checkoutProduct">

            <img className="checkoutProduct-image" src={img} alt="" />

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                        <p>⭐</p>  
                </div>
                <button onClick={handleClickRemove}>Remove from Basket</button>
            </div>
        </div>
        
        
    )
}

export default CardProduct

