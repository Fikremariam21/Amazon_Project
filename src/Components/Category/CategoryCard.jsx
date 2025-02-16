
// import React from 'react';
// import styles from './Category.module.css'
// const CategoryCard = ({data}) => {
//   return (
//     <div className={styles.category}>
//       <a href="/">
//         <span>
//           <h2 className='title'>{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt={data.title} />
//         <p>Shop now</p>
//       </a>
//     </div>
//   );
// };

// export default CategoryCard;


// import React from 'react';
// import styles from './Category.module.css';

// const CategoryCard = ({ data }) => {
//   return (
//     <div className={`${styles.category} p-4 bg-white rounded-lg shadow-md`}>
//       <a href="/" className="block text-center">
//         <span>
//           <h2 className="text-lg font-semibold">{data.title}</h2>
//         </span>
//         <img src={data.imgLink} alt={data.title} className="w-full h-auto" />
//         <p className="text-blue-500 mt-2">Shop now</p>
//       </a>
//     </div>
//   );
// };

// export default CategoryCard;






import React from 'react';
import styles from './Category.module.css'

const CategoryCard = ({ data }) => {
  return (
    <div className="p-4 rounded-lg shadow-md m-5 bg-white">
      <a href="/" className="block text-center">
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <img src={data.imgLink} alt={data.title} className= {`${styles.category} w-full h-auto p-5 `} />
        <p className="text-blue-500 mt-2">Shop now</p>
      </a>
    </div>
  );
};
export default CategoryCard;
