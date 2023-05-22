import {createContext, useState} from "react"

export const CartContext  = createContext()

export function CartProvider({children}){

const [cart , setCart] = useState([])
const [wishlist , setWishlist] = useState([])


function handleClickUpdate(item){
    setCart(cart => [...cart , item])
    
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
        <CartContext.Provider  value={{cart , handleClickUpdate , wishlist ,handleClickUpdateToWishlist, removeFromCart , removeFromWishlist}}>
        {children}
        </CartContext.Provider>
        </>
    )
}
