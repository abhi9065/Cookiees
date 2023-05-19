import { useContext } from "react";
import { products } from "../backend/db/products"
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export function ProductCart(){

    const {handleClickUpdate } = useContext(CartContext)

    return(

        <div className="product-page">

        <h1 className="product-heading">Bakery Items</h1>
    

        <div className="product-cart">
           {
            products.map((item) => {

               const {id,src,title,price} = item;
               

               function clickToCart(){
                handleClickUpdate(item)
               }

                return(
                <div key={id} className="product-listing">

                    <Link to={`/product/${id}`}>
                <img className="productcart-image" src={src} alt="not found" />
               <h1>{title}</h1>
              <h3>{price}</h3>
                    </Link>


                   <button onClick={clickToCart}>Add to Cart</button>
                   <button onClick={clickToCart}>Add to Wishlist</button>

                </div>
            )})
           }
    
        </div>
        </div>
    )
}