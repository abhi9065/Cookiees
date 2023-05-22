import { products } from './../../backend/db/products';


export function CategoryPage(){

  

  const filterData = products.filter(data => data.category.includes('cakes'))
  

    return(
      <>

     
      <div className="categorypage-items">
     {
        filterData.map(data=>(
            <div className="category-listing">
            <img className="categoryCart-image" src={data.src} alt="not found" />
            </div>
        ))
     }

     </div>
  
        </>
    )
}