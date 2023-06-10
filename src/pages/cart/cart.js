import { useContext, useState } from "react"
import { CartContext } from './../context/cartContext';


export function Cart(){

    const {cart , removeFromCart , updateQuantity , handleClickUpdateToWishlist} = useContext(CartContext);



      function plus(itemId) {
        const newQuantity = cart.find((item) => item.id === itemId).quantity + 1;
        updateQuantity(itemId, newQuantity);
      }

      function minus(itemId) {
        const newQuantity = cart.find((item) => item.id === itemId).quantity - 1;
        updateQuantity(itemId, newQuantity);
      }

      function clickToWishlist(item){
        handleClickUpdateToWishlist(item)
       }


      
    function removeCart(item){
        removeFromCart(item)
       }
    return(

        <div className="cart-page">

        <h1 className="cart-heading">Cart Items</h1>
        
        
        <div className="cart-main-listing">
           { 
            cart.map(({id,title,src,price,quantity}) => (
                <div key={id} className="cart-listing">

                   <img className="cart-image cart" src={src} alt="not found" />
                   <h1 className="cart ">{title}</h1>
                   <h3 className="cart">{price}/-Rs.</h3>

                   <div>
                   <button onClick={()=>{plus(id)}}>+</button>
                     {quantity}
                   <button onClick={()=>{minus(id)}}>-</button>
                   </div>

                   <button onClick={()=>{clickToWishlist({id,title,src,price,quantity})}}>Add to Wishlist</button>

                  <button onClick={()=>{removeCart(id)}}>Remove Cart</button>


                 
           
                </div>

            ))
           }

           <div>
           
           {
            cart.map(({id,title,src,price,quantity}) => (
              <div>
              
              <h1>price detail</h1><hr/>

              <h2>price : {price*quantity}</h2>
              <h3> Item of Cart {quantity}</h3>
               <h3>Delivery Charges  FREE</h3>
               <h3>Coupon Discount   RS 0.00</h3>  

              </div>
            ))
           }
           </div>


           <h2>
            totalPrice : {cart.reduce((total, item) => (total += item.price * item.quantity), 0)}
           </h2>
  


    
        </div>
        </div>
    )
}