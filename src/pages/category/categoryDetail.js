import { useParams } from 'react-router-dom';

import { products } from './../../backend/db/products';

export function CategoryDetail(){


    const {categoriesId} = useParams();
       
        const category = products.filter(data => data.category === categoriesId)
        console.log(category)
    

    return (
        <>
        <h1 className="c-detail">catgeory details </h1>
          
        <div className='categoryDetail-page'>
        {
            category.map(data => (
                <div className='categoryDetail-listing'>
                <img style={{width:'60%',height:'60%'}} src={data.src} alt="not found"/>
                <h3>{data.price}/-Rs.</h3>
                <h1>{data.title}</h1>
                </div>
            ))
           }
           </div>
   </>
    )
}