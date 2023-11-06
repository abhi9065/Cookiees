import { BsCart3 } from 'react-icons/bs';
import {AiOutlineHeart} from "react-icons/ai"
import {Link} from "react-router-dom"
import { useContext} from 'react';
import { CartContext } from '../context/cartContext';



export function Navbar(){

  const {cart} = useContext(CartContext)
  
    return (
        <>

        <div className='nav-bar'>
      

       
        <div className='heading-main'>
         <Link className="heading" to={'/'} > COOKIES</Link>
        </div>

    

        <div className='search-input'>
        <input className="input" to={<productcart/>}  placeholder="🔎search for products" />
        </div>

        <ul className="category">

          <li >
          <Link  to='/cart'>
          <BsCart3 className='list'/>
          <spam className="cart-counter" >{cart.length}</spam>
          </Link>
          </li>

          <li className="list">
          <Link to='/wishlist'>
          <AiOutlineHeart  className='list'/>
          </Link>
          </li>

          <button className="Btn ">Login</button>

        </ul>
    
  
      </div>

        </>
    )
}