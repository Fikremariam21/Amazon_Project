import React from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
function ProductCard({product}) {
    const {image, title, id, rating, price}= product;
  return (
    <div>
        <a> 
            <img src={image} alt="" />
        </a>
        <div>
            <h3> {title}</h3> 
            <div> 
                {/* Rating */}
                <Rating value={rating.rate} precision={0.1}/>
                {/* Count*/}
                <small> {rating.count} </small>
            </div>
            <div>
                {/* prices */}
                <CurrencyFormat amount={price}/> 
            </div>
            <div>
               <button> add to cart </button> 
            </div>
        </div>
    </div>
  )
}

export default ProductCard