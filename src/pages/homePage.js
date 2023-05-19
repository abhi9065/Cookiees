import { AiOutlineMail } from 'react-icons/ai';
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { products } from '../backend/db/products';

export function HomePage(){

    return(
        <>
        <div>
        <img className="image" src="https://img.freepik.com/premium-photo/chocolate-cake-close-up-background-celebration-chocolate-dessert-generative-ai_47243-2084.jpg" alt="not found" />
        </div>

      <section className='homepage-cake-image'>

      <article>
        <img style={{width:'40%'}} src={"https://imgcdn.floweraura.com/DSC_8700.jpg"} alt="not found" />
       <p><Link className='homepage-cake'  to={`/categoryCake`}> cake </Link> </p> 
      </article>

    <article>
    <img style={{width:'15%'}} src="https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg" alt="not found" />
    <p> <Link className='homepage-cake'  to={`/categoryCookies`}> cookies </Link> </p> 
    </article>

    <article>
    <img  style={{width:'20%'}} src="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="not found" />
    <p> <Link className='homepage-cake'  to={`/categoryCookies`}> cookies </Link> </p> 
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