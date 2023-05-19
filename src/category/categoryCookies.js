import { useParams } from "react-router-dom"
import { products } from "../backend/db/products"

export function CategoryCookies(){

    const {category} = useParams()

    const filterCookies =  products.filter(data => data.category.includes('cookies'))
    
    return(
        <div className="App">

         <h1>here {category}</h1>   
   
         <div className="category-cart">
         { 
         filterCookies.map(data=>(
        <div>
        <img src={data.src} alt="not found" />
        </div>
    ))
   }
   </div>

        </div>
        
        )
}