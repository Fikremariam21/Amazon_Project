import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './product.module.css'

function Product() {
    const [product, setProduct] = useState([]);
     useEffect(() => {
        axios.get ('https://fakestoreapi.com/products')
       .then((res) => {
        console.log(res);
        setProduct(res.data)
       }).catch((err) => {
        console.log(err)
       })
     }, []);
    
  return (
    <section className= {`${styles.product_container}`}> 
        {
            product.map((singleProduct) => (
                <ProductCard product= {singleProduct} key= {singleProduct.id}/>
            ))
        }
    </section>
  )
}

export default Product


// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// import ProductCard from './ProductCard';

// function Product() {
//     const [product, setProduct] = useState([]);
//      useEffect(() => {
//         axios.get ('https://fakestoreapi.com/products')
//        .then((res) => {
//         console.log(res);
//         setProduct(res.data)
//        }).catch((err) => {
//         console.log(err)
//        })
//      }, []);
    
//   return (
//     <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'> 
//         {
//             product.map((singleProduct) => (
//                 <ProductCard product= {singleProduct} key= {singleProduct.id}/>
//             ))
//         }
//     </section>
//   )
// }

// export default Product