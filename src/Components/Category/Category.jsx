
import React from 'react';
import { categoryInfos } from './categoryInfo';
import CategoryCard from './CategoryCard';
import styles from './Category.module.css'

const Category = () => {
  return (
    <section> 
    <div className={styles.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </div>
    </section> 
  );
};

export default Category;


// Category.jsx (Explicit Return)

// import React from 'react';
// import { categoryInfos } from './categoryInfo';
// import CategoryCard from './CategoryCard';
// import styles from './Category.module.css'

// const Category = () => {
//   return (
//     <div className={styles.category_container}>
//       {categoryInfos.map((infos) => {
//         return <CategoryCard key={infos.name} data={infos} />; // Explicit return
//       })}
//     </div>
//   );
// };

// export default Category;