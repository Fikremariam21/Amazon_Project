import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

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
    <section> 
        {
            product.map((singleProduct) => (
                <ProductCard product= {singleProduct} key= {singleProduct.id}/>
            ))
        }
    </section>
  )
}

export default Product