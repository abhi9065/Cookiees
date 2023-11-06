import { BsCart3 } from 'react-icons/bs';
import {AiOutlineHeart} from "react-icons/ai"
import {Link} from "react-router-dom"
import { useContext} from 'react';
import { CartContext } from '../context/cartContext';



export function Navbar(){

  const {cart} = useContext(CartContext)
  
    return (
        <>

      
        <nav className="Nav">
       
         <Link className="heading" to={'/'} > COOKIES</Link>
        <input className="input" to={<productcart/>}  placeholder="🔎search for products" />
        
      

        <ul className="category">

          <li  className='list'>
          <Link style={{color:'white'}} to={'/cart'}>
          <BsCart3/>
          <spam classNam="cart-counter" >{cart.length}</spam>
          </Link>
          </li>

          <li className="list">
          <Link style={{color:'white'}} to={'/wishlist'}><AiOutlineHeart/></Link>
          </li>


          <button className="Btn">Login</button>
        </ul>

    

        
      </nav>
        </>
    )
}