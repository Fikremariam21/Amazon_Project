
// import React from 'react';
// import { categoryInfos } from './categoryInfo';
// import CategoryCard from './CategoryCard';
// import styles from './Category.module.css'

// const Category = () => {
//   return (
//     <section> 
//     <div className={styles.category_container}>
//       {categoryInfos.map((infos) => (
//         <CategoryCard key={infos.name} data={infos} />
//       ))}
//     </div>
//     </section> 
//   );
// };

// export default Category;

import React from 'react';
import { categoryInfos } from './categoryInfo';
import CategoryCard from './CategoryCard';
import styles from './Category.module.css';

const Category = () => {
  return (
    <section className="py-8 px-4"> 
      <div 
        className={`${styles.category_container} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}
      >
        {categoryInfos.map((infos) => (
          <CategoryCard key={infos.name} data={infos} />
        ))} 
      </div>
    </section> 
  );
};

export default Category;






// import React from 'react';
// import { categoryInfos } from './categoryInfo';
// import CategoryCard from './CategoryCard';

// const Category = () => {
//   return (
//     <section className="py-8 px-4 "> 
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
//         {categoryInfos.map((infos) => (
//           <CategoryCard key={infos.name} data={infos} />
//         ))}
//       </div>
//     </section> 
//   );
// };

// export default Category;

