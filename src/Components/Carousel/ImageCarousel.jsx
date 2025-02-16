// import React from 'react'
// import {Carousel} from 'react-responsive-carousel'
// import {img} from './img/data'
// import classes from './Carousel.module.css'

// function ImageCarousel() {
//   return (
//     <div>
//        <Carousel
//           autoPlay={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showIndicators={false}
//           showStatus={false}


//         >
//              {
//               img.map((imageLink) => {
//                 return <img src={imageLink}/>

//               })
//              }
//         </Carousel> 
//         <div className={classes.hero_img}> </div>
//     </div> 
//   ) 
// }
// export default ImageCarousel 



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/data';
import classes from './Carousel.module.css'; // Keep CSS Modules import

function ImageCarousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        className="tailwind-carousel" // Optional: Tailwind class for carousel container
      >
        {img.map((imageLink) => {
          return <img src={imageLink} alt="" className="w-full h-auto" />; // Example Tailwind class
        })}
      </Carousel>

      {/* Use CSS Module class and Tailwind classes together */}
      <div className={`${classes.hero_img} mt-4 p-2 bg-gray-100`}>
        {/* Content within the hero image section */}
        {/* <p className="text-sm text-gray-500">Hero Image Description</p> */}
      </div>
    </div>
  );
}

export default ImageCarousel;