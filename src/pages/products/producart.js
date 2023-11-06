import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';
import axios from 'axios';




export function ProductCart(){

    const { handleClickUpdate , handleClickUpdateToWishlist} = useContext(CartContext)

    const [showProducts , setProducts] = useState([])
    const [showSearch , setShowSearch] = useState("")
    const [showRange , setShowRange] = useState(0)

    const [showCake , setShowCake] = useState(false)
    const [showCookies , setShowCookies] = useState(false)
    const [showCupcakes , setShowCupcakes] = useState(false)

    const [showSort , setShowSort] = useState("")

    useEffect(() => { 
        return (async function () { 
          const response = await axios.get("/api/products"); 
          setProducts(response.data.products); 
           
        })()},[]);

 console.log(showRange)
        function clickToCart(item){
            handleClickUpdate(item)
           }

           function clickToWishlist(item){
            handleClickUpdateToWishlist(item)
           }

           function searchHandler(e){
            setShowSearch(e.target.value)
           }

           function Cake(){
            setShowCake(!showCake)
           }

           function Cookies(){
            setShowCookies(!showCookies)
           }

           function Cupcake(){
           setShowCupcakes(!showCupcakes)
           }

           function clearButton(){
            setShowRange('')
            setShowSearch('')
            setShowCake('')
            setShowCookies('')
            setShowCupcakes('')
            setShowSort('')
            
           }


           const rangeHandler = (data , condition1) => condition1 ? data.filter((item) => item.price >= showRange) : data ; 

           const filterSearchHanlder = (data , condition2) => condition2 ? data.filter(item => item.title.toLowerCase().includes(showSearch.toLowerCase())) : data ; 

            const filterCategories = (data , condition3 , condition4 , condition5) =>{
              let newData = []
              if(condition3){
                const filterCake = data.filter((item) => item.category === "cakes")
                newData.push(...filterCake)
              }
              if(condition4){
                const filterCookies = data.filter((item) => item.category === "cookies")
                newData.push(...filterCookies)
              }
              if(condition5){
                const filterCupcakes = data.filter(item => item.category === "cupcake")
                newData.push(...filterCupcakes)
              }

              return newData.length >= 1 ? newData : data;
            }

            const filterSortByData = (data, condition6) =>{
              if(condition6 === "LOW-TO-HIGH"){
                return data.sort((a,b) => a.price - b.price)
              }
              if(condition6 === "HIGH-TO-LOW"){
                return data.sort((a,b) => b.price - a.price)
              }else{
                return data
              }
            }

           
          
          const filteredRangeHandler = rangeHandler(showProducts , showRange)
          const filteredSearchHandler = filterSearchHanlder(filteredRangeHandler , showSearch)
          const filterCategoryHandler = filterCategories(filteredSearchHandler , showCake,showCookies,showCupcakes)
          const filteredSortData = filterSortByData(filterCategoryHandler , showSort)

    return(

        <div>
         <h1 className="product-heading">Bakery Items</h1>

        <div className="product-page">

       <div className="sidebars">

       <h1>Filters</h1>

       <div className="sidebar-filter">
    <button onClick={clearButton}>Clear all filters</button>
      </div> <hr/>

       <div className="sidebar-search">
       <p className="sidebar-search-heading">Search</p>
       <input placeholder="Search For Products" type="text" onChange={searchHandler }  />
      </div><hr/>


       <div>
       <h2>price</h2>
       <input  value={showRange} type="range" step='300' min="300" max="1500"  onChange={(e) => setShowRange(e.target.value)} />
       </div><hr/>

        
     <div className="sidebar-category">
     <h2>Category</h2>
        <label>
        <input className="category-child" type="checkbox" onChange={Cake} /> Cake
        </label>
       <label>
       <input className="category-child" type="checkbox" onChange={Cookies} /> Cookies
       </label>
       <label>
       <input type="checkbox" onChange={Cupcake} /> Cupcake
       </label>
    
    </div><hr/>


    <div className="sidebar-filters">
    <h2>Sort by</h2>
    <label>
    <input type="radio"  onChange={() => setShowSort('LOW-TO-HIGH')} checked={showSort=== 'LOW-TO-HIGH'}/>
     price - low-to-high
    </label>

    <label>
    <input type="radio" onChange={() => setShowSort('HIGH-TO-LOW')} checked={showSort === 'HIGH-TO-LOW'}/>
    price - high-to-low
    </label>

    </div><hr/>
    
    </div>


        <div className="mains">

           {
           filteredSortData && filteredSortData.map((item) => {
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