import { useParams } from "react-router-dom"
import { products } from "../backend/db/products"


export function CategoryCake(){

const {category} = useParams()

const filterCakes =  products.filter(data => data.category.includes('cakes'))
  
    return(
      <>

      <h1 style={{margin:'10rem'}}>here{category}</h1>

   { 
    filterCakes.map(data=>(
        <div>
        <img src={data.src} alt="not found" />
        </div>
    ))
   }


  


        </>
    )
}