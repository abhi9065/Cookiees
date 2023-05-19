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
        <img className="image" src="https://media.istockphoto.com/id/1369757837/photo/freshly-prepared-raspberry-cupcakes-on-kitchen-counter.jpg?s=1024x1024&w=is&k=20&c=psZ6k0JaGzLZwUevsQi0pmzSvlXBq-uQ6-Nw6g_S8aU=" />
        </div>

      <section className='homepage-cake-image'>

      <article>
        <img style={{width:'100%'}} src={"https://imgcdn.floweraura.com/DSC_8700.jpg"} alt="not found" />
       <p><Link className='homepage-cake'  to={`/categoryCake`}> cake </Link> </p> 
      </article>

    <article>
    <img style={{width:'30%'}} src="https://juliemarieeats.com/wp-content/uploads/2023/01/Bakery-Style-Chocolate-Chip-Cookies-14-scaled.jpg" alt="not found" />
    <p> <Link className='homepage-cake'  to={`/categoryCookies`}> cookies </Link> </p> 
    </article>

    <article>
    <img  style={{width:'40%'}} src="https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg" alt="not found" />
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