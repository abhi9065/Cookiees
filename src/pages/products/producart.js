import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './../context/cartContext';
import axios from 'axios';



export function ProductCart(){

    const { handleClickUpdate , handleClickUpdateToWishlist} = useContext(CartContext)

    const [showProducts , setProducts] = useState([])

    useEffect(() => { 
        return (async function () { 
          const response = await axios.get("/api/products"); 
          setProducts(response.data.products); 
           
        })()},[]);


        
        function clickToCart(item){
            handleClickUpdate(item)
           }

           function clickToWishlist(item){
            handleClickUpdateToWishlist(item)
           }

    return(

        <div className="product-page">

        <h1 className="product-heading">Bakery Items</h1>

        <div className="product-cart">
           {
            showProducts.map((item) => {
               const {id,src,title,price} = item;
        

                return(
                <div key={id} className="product-listing">

                    <Link className="product-link" to={`/product/${id}`}>
                <img className="productcart-image" src={src} alt="not found" />
               <h1 >{title}</h1>
              <h3>{price}/-Rs.</h3>
                    </Link>


                   <button onClick={()=>{clickToCart(item)}}>Add to Cart</button>
                   <button onClick={()=>{clickToWishlist(item)}}>Add to Wishlist</button>

                </div>
            )})
           }
    
        </div>
        </div>
    )
}