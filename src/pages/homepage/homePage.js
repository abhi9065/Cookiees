import { AiOutlineMail } from 'react-icons/ai';
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"
// import { Link } from 'react-router-dom';
// import { products } from '../backend/db/products';
import { Link } from 'react-router-dom';
import { CategoryPage } from './../category/category';



export function HomePage(){
      


    return(
        <>



        <div>
        <img className="image" src="https://images.pexels.com/photos/5531659/pexels-photo-5531659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>

      
      <div className='homepage-cake-description'>
      <img style={{width:'30%'}} src="https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=360&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 360w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=740&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 740w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=826&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 826w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=900&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 900w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=996&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 996w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=1060&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 1060w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=1380&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 1380w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=1480&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 1480w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=1800&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 1800w, https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=2000&t=st=1685004836~exp=1685005436~hmac=982f5bff0a4416ade3f152684214d680f8332af3b6aa0262102d2561bb47f1b3 2000w" alt='not found'/>
    
     <div className='homepage-cake-descriptionText'>
     <h1>TASTE REAL PLEASURE</h1>
      <p>We will create you & cake that will undoubtedly give you a lot positive emotions</p>
      <Link to={'/productcart'} className='homepage-menucard'>Menu Card</Link>
      </div>


       </div>


        <div>
           <CategoryPage/>
        </div>




        <footer className='footer'>

        <div className='footer-main-heading'>
        <h2 className='footer-heading'> Copyright © 2023 Bakery Shop | Managed by Abhishek Jain.</h2>
        </div>
    
        <div className='social-main-link'>
        <li className='social-link'>
         <a className='anchoor' href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGsmhSGRnKMtbfDNVPhXqSqmtdG"><AiOutlineMail/></a>
        </li>
    
        <li className='social-link'>
         <a className='anchoor' href="https://www.instagram.com/abhishek______._jain/"><BsInstagram/></a>
        </li>
    
        <li className='social-link'>
         <a className='anchoor' href="https://twitter.com/Abhishe75672967"><FiTwitter/></a>
        </li>
        </div>
    
        </footer>
      
        </>
    )
}