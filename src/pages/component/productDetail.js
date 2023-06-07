import { useParams } from "react-router-dom"
import { ProductDetailCard } from './productDetailCart';
import { products } from "../../backend/db/products";

export function ProductDetail(){

    const { productId } = useParams()  
    


       const product = products.find(data => data.id === productId)
       console.log(product)

    return(
        
        <div className="productDetail-page">

        <h1>Details</h1>
      
          <ProductDetailCard {...product}/>

        </div>
    )
}