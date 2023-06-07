import { BsCart3 } from 'react-icons/bs';
import {AiOutlineHeart} from "react-icons/ai"
import {Link} from "react-router-dom"
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';



export function Navbar(){

  const {cart} = useContext(CartContext)
  
  const [products , setProducts] = useState([])
  const [userInput , setUserInput] = useState()


 const fetchData = async()=>{
   const response = await axios.get('/api/products')
      setProducts(response.data.products)
 }

 useEffect(()=>{
   fetchData()
 },[])


 function handleInput(e){
    setUserInput(e.target.value)
 }


 const fruitProducts = products.filter(data => data.title.includes(userInput))


    return (
        <>

      
        <nav className="Nav">
       
         <Link className="heading" to={'/'} > COOKIES</Link>
        <input className="input" to={<productcart/>} onChange={handleInput} placeholder="🔎search for products" />
        
        {
          fruitProducts.map(data => (
              <div>
              <h1>{data.title}</h1>
              </div>
          ))
         }
         

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