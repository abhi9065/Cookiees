import {createContext, useState} from "react"

export const CartContext  = createContext()

export function CartProvider({children}){

const [cart , setCart] = useState([])
const [wishlist , setWishlist] = useState([])


function handleClickUpdate({id,src,name,price}){
    const isPresent = cart.findIndex(item => item.id === id)

     if(isPresent === -1){
       setCart(cart => [...cart , {id,src,name,price,quantity : 1}])
     }else{
      setCart(cart.map(item => item.id === id ?
       {...item , quantity : item.quantity + 1} : item ))
     }
    
}


function updateQuantity(itemId, newQuantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

function handleClickUpdateToWishlist(item){
    setWishlist(wishlist => [...wishlist , item])
    
}

const removeFromCart = (productId) => {
    setCart(prevItems => prevItems.filter(item => item.id !== productId))
}

const removeFromWishlist = (productId) => {
    setWishlist(prevItems => prevItems.filter(item => item.id !== productId))
}

    return (
        <>
        <CartContext.Provider  value={{cart , handleClickUpdate ,updateQuantity, wishlist ,handleClickUpdateToWishlist, removeFromCart , removeFromWishlist}}>
        {children}
        </CartContext.Provider>
        </>
    )
}
