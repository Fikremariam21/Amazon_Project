
import './App.css'
import Header from './Components/Header/Header'
import ImageCarousel from './Components/Carousel/ImageCarousel.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from './Components/Category/Category.jsx';
import Product from './Components/Products/Product.jsx';
 
 

function App() {

  return (
    <>
    <Header/>
    <ImageCarousel/>
    <Category/>
    < Product/>
     
     
    </>
  )
}

export default App
