import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import classes from './Carousel.module.css'

function ImageCarousel() {
  return (
    <div>
       <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}


        >
             {
              img.map((imageLink) => {
                return <img src={imageLink}/>

              })
             }
        </Carousel> 
        <div className={classes.hero_img}> </div>
    </div> 
  ) 
}
export default ImageCarousel 

