import React from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import styles from './product.module.css'

function ProductCard({product}) {
    const {image, title, id, rating, price}= product;
  return (
    <div  className= {`${styles.card_container} bg-white rounded-lg shadow-md overflow-hidden`}> 
        <a  > 
            <img src={image} alt=""  /> 
        </a>
        <div className='p-4'>
            <h3 className=' ' > {title}</h3> 
            <div className= {`${styles.rating}  `}> 
                {/* Rating */}
                <Rating value={rating.rate} precision={0.1} readOnly/>
                {/* Count*/}
                <small className=' ' > {rating.count} </small>
            </div>
            <div className=' ' >
                {/* prices */}
                <CurrencyFormat amount={price}/> 
            </div>
            <div>
               <button className= {`${styles.button}`}> add to cart </button> 
            </div>
        </div>
    </div>
  )
}

export default ProductCard


// import React from 'react'
// import { Rating } from '@mui/material'
// import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
// import styles from './product.module.css'

// function ProductCard({product}) {
//     const {image, title, id, rating, price}= product;
//   return (
//     <div className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col">
//       <a href="/" className="block">
//         <img src={image} alt={title} className="w-full object-cover" />
//       </a>
//       <div className="p-3 flex flex-col flex-grow">
//         <h3 className="text-sm font-medium text-gray-900 truncate">{title}</h3>
//         <div className="flex items-center mt-1">
//           <Rating value={rating.rate} precision={0.1} readOnly size="small" />
//           <span className="ml-2 text-gray-500 text-xs">({rating.count})</span>
//         </div>
//         <div className="mt-2">
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-xs font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard




// full GPT


