import "./App.css";
import "./pages/navbar/navbar.css"
import "./pages/homepage/homepage.css"
import "./pages/products/productCart.css" 
import "./pages/category/catgeory.css"
import './pages/cart/cart.css'
import './pages/wishlist/wishlist.css'
import './pages/component/productDetail.css'
import {Routes,Route} from "react-router-dom"

import { Navbar } from './pages/navbar/Navbar';
import { HomePage } from './pages/homepage/homePage';
import { CategoryPage } from "./pages/category/category";
import { ProductCart } from './pages/products/producart';
import { Cart } from './pages/cart/cart';
import { Wishlist } from "./pages/wishlist/wishlist";
import { ProductDetail } from "./pages/component/productDetail";



function App() {


  return (
    <div className="App">

    <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path='/category' element={<CategoryPage/>}></Route>
    <Route path="/productCart" element={<ProductCart/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/wishlist" element={<Wishlist/>}></Route>
    <Route path="/product/:productId" element={<ProductDetail />}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
