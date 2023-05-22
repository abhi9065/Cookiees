import { AiOutlineMail } from 'react-icons/ai';
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
// import { Link } from 'react-router-dom';
// import { products } from '../backend/db/products';
import { Link } from 'react-router-dom';


export function HomePage(){
      


    return(
        <>



        <div>
        <img className="image" src="https://media.istockphoto.com/id/1369757844/photo/tasty-raspberry-cupcakes-ready-to-eat.jpg?s=1024x1024&w=is&k=20&c=uHmGzBQx4ALWAGYe3hQeamkKwb29kZQYKvhq2VkhL4E="/>
        </div>

        <div className='homepage-main-menucard'>
        <Link to={'/productcart'} className='homepage-menucard'>Menu Card</Link>
        </div>

        <section className='category-cake-image'>

        <article>
          <img style={{width:'100%' , height:'100%'}} src={"https://imgcdn.floweraura.com/DSC_8700.jpg"} alt="not found" />
         <p><Link className='homepage-cake-link' to={'/category'}> cake </Link> </p> 
        </article>
  
      <article>
      <img style={{width:'35%', height:'100%'}} src="https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg" alt="not found" />
      <p> <Link className='homepage-cake-link' to={'/category'}> cookies </Link> </p> 
      </article>
  
      <article>
      <img  style={{width:'48%', height:'100%'}} src="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="not found" />
      <p> <Link className='homepage-cake-link' to={'/category'}> cupcake </Link> </p> 
      </article>
  
  
       </section>
       
        
      <footer className='footer'>

      <li className='social-link'>
       <a className='anchoor' href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGsmhSGRnKMtbfDNVPhXqSqmtdG"><AiOutlineMail/></a>
      </li>

      <li className='social-link'>
       <a className='anchoor' href="https://www.instagram.com/abhishek______._jain/"><BsInstagram/></a>
      </li>

      <li className='social-link'>
       <a className='anchoor' href="https://twitter.com/Abhishe75672967"><FiTwitter/></a>
      </li>


      </footer>
      
        </>
    )
}