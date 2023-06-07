import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';
import axios from 'axios';




export function ProductCart(){

    const { handleClickUpdate , handleClickUpdateToWishlist} = useContext(CartContext)

    const [showProducts , setProducts] = useState([])
    const [search , setSearch] = useState('')
    const [filterChoice , setFilterChoice] = useState('')

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

          
        

           const displayCategoryData = () => {
        
            if(filterChoice === 'cakes')
            return(showProducts.filter(item => item.category === "cakes"))
            if(filterChoice === 'cookies')
            return(showProducts.filter(item => item.category === 'cookies'))
            if(filterChoice === 'cupcake')
            return(showProducts.filter(item => item.category === 'cupcake'))
            if(filterChoice === "low-to-high")
            return(showProducts.sort((a,b)=> a.price - b.price))
            if(filterChoice === "high-to-low")
            return(showProducts.sort((a,b)=> b.price - a.price))
            if(filterChoice === "clear")
            return(showProducts)
            if (filterChoice === 'searching' && search) 
            return showProducts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
          

            return showProducts;
           }

           const filteredCategoryData = displayCategoryData()


    return(

        <div>
         <h1 className="product-heading">Bakery Items</h1>

        <div className="product-page">

       <div className="sidebars">

       <div>
        <h1>filters</h1>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={()=>{setFilterChoice('searching')}}>search</button>
      </div>
   
        
     <div className="sidebatr-category">
        <button onClick={()=>{setFilterChoice('cakes')}}>Cake</button>
        <button onClick={()=>{setFilterChoice('cookies')}}>cookies</button>
        <button onClick={()=>{setFilterChoice('cupcake')}}>Cupcake</button>
    </div>

    <div>
    <button onClick={()=>{setFilterChoice('clear')}}>clear</button>
    </div>


    <div className="sidebar-filters">

    <label>
    <input
      type="checkbox"
      value="low-to-high"
      onChange={() => setFilterChoice('low-to-high')}
      checked={filterChoice === 'low-to-high'}
    />
     low-to-high
    </label>

    <label>
    <input
      type="checkbox"
      value="high-to-low"
      onChange={() => setFilterChoice('high-to-low')}
      checked={filterChoice === 'high-to-low'}
    />
    high-to-low
  </label>

    </div>
    

    </div>

        <div className="mains">
           {
            filteredCategoryData.map((item) => {
               const {id,src,title,price} = item;
                return(
                <div key={id} className="product-listing">

          <Link className="product-link" to={`/product/${id}`}>
                <img className="productcart-image" src={src} alt="not found" />
                <h1 >{title}</h1>
                <h3>{price}/-Rs.</h3>
         </Link>


                   <button className="productcart-button" onClick={()=>{clickToCart(item)}}>Add to Cart</button>
                   <button className="productcart-button" onClick={()=>{clickToWishlist(item)}}>Add to Wishlist</button>

                </div>
            )})
           }
    
        </div>
        </div>
        </div>
    )
}