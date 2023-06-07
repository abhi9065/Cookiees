import {Link} from "react-router-dom"


export function CategoryPage(){


    return(
      <>

     
      <div className="categorycart">
    
      <div className="category-listing">


      <Link to={`/categories/cakes`} className='categorypage-link'>
      <div className="category-item">
        <img className="category-image" src={"https://imgcdn.floweraura.com/DSC_8700.jpg"} alt="not found" />
         <h2>cake</h2> 
      </div>
      </Link>
     


      <Link to={'/categories/cookies'} className='categorypage-link' >
    <div className="category-item">
    <img className="category-image" src="https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg" alt="not found" />
     <h2>cookies</h2>
    </div>
    </Link> 


    <Link to={'/categories/cupcake'} className='categorypage-link'>
    <div className="category-item">
    <img  className="category-image" src="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="not found" />
      <h2>cupcakes</h2>
    </div>
    </Link>


     </div>
           

     </div>
  
        </>
    )
}