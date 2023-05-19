import { useParams } from "react-router-dom"
import { ProductDetailCard } from "./productdetailcard"
import { products } from "../backend/db/products"

export function ProductDetail(){

    const { productId } = useParams()

       const product = products.find(data =>data.id === Number(productId))

    return(
        <div className="productDetail-page">

        <h1>here {productId}</h1>
          
        <ProductDetailCard {...product}/>
          

        </div>
    )
}