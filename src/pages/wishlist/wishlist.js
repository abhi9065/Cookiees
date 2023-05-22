import { useContext } from "react"
import { CartContext } from './../context/cartContext';


export function Wishlist(){

    const {wishlist , removeFromWishlist} = useContext(CartContext);

    function removeWishlist(item){
        removeFromWishlist(item)
       }
    return(

        <div className="cart-page">

        <h1 className="cart-heading">Cart Items</h1>
    

        <div className="cart-main-listing">
           {
            wishlist.map(({id,title,src,price}) => (
                <div key={id} className="cart-listing">

                   <img className="cart-image cart" src={src} alt="not found" />
                   <h1 className="cart ">{title}</h1>
                   <h3 className="cart">{price}/-Rs.</h3>

                  <button onClick={()=>{removeWishlist(id)}}>Remove Cart</button>


                </div>
            ))
           }
    
        </div>
        </div>
    )
}