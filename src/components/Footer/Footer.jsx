// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import   logo11  from '../../images/Partener-logo/logo11.png'
export default function Footer() {
  /* $(document).ready(function(){
    
        $("#footer").css("display", "block");
    }); */
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return <>
    <div className=" bottom-0">
      
    <footer id='footer' className=" container-fluid  bg-black text-center text-white   "> 
    <div className="row  text-start  pt-3">
        <div className="col-md-4 ps-5 ">
          <div className=" fotter-title mt-3">
          <h2 className="fs-3">Fancy Agancy</h2>
          </div>
          <div className="">
          <div className="offcanvas-body w-50 man3   ">
        <ul className="navbar-nav text-start flex-grow-1 pe-3 text-white">
        <li className="nav-item ">
          <Link onClick={scrollToTop} className="nav-link active  " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="company">About Company</Link>
        </li>
        <li className="nav-item ">
          <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="team">Our Team</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="site">About Site</Link>
        </li>
        <li className="nav-item">
          <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="services">Services</Link>
        </li>
        <li className="nav-item  ">
          <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="works">Our Works</Link>
        </li>
        <li className="nav-item">
          <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="Contact">Contact Us</Link>
        </li>
          
          
        </ul>
        
      </div>
          </div>
        </div>
        <div className="col-md-4 ps-5 ">
          <div className="fotter-title fs-2 ">
            <h2 className='fs-3 mt-3'>Contact Us <i className="fa-solid fa-square-phone text-white fs-4"></i></h2>
          
          
          </div>
          <div className="mt-4 ">
            <h6>Email <i className="fa-solid fa-envelope"></i> : <a className='fs-6 fotter-title text-decoration-none' href="mailto:noursaber302@gmail.com"> noursaber302@gmail.com</a></h6>
            <h6 className='mt-3'> Phone <i className="fa-solid fa-phone"></i> : <span className='fs-6 fotter-title '>+201018820507</span></h6>
            <h6 className='mt-3'>Messenger <i className="fa-brands fa-facebook-messenger"></i> : <a className='fs-6  text-decoration-none fotter-title'  href='https://www.facebook.com/profile.php?id=100092276270994&mibextid=ZbWKwL'>Fancy Agancy</a></h6>
          </div>
        </div>
        <div className="col-md-4 ps-5">
          <div className="fotter-title fs-2">
          <h2 className='fs-3 mt-3'>Follow Us <i className="fa-solid fa-share-nodes text-white fs-4"></i></h2>
          </div>
          <div className="social   mt-3  ">
            <a className='fs-4 text-decoration-none text-white'  href="https://www.facebook.com/profile.php?id=100092276270994&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-facebook fs-2"></i> </a>
            <a className='fs-4 text-decoration-none ms-3 text-white'  href="https://www.linkedin.com/in/nour-saber-05270219a" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fs-2" ></i> </a>
            <a className='fs-4 text-decoration-none ms-3 text-white'  href="https://www.behance.net/noorsaber1" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-behance fs-2"></i> </a>
            <a className='fs-4 text-decoration-none ms-3 text-white'  href="https://www.behance.net/noorsaber1" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-instagram fs-2"></i> </a>
            <a className='fs-4 text-decoration-none ms-3 text-white'  href="https://www.behance.net/noorsaber1" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-twitter fs-2"></i> </a>
          </div>
          <div className="powered-by">
            <h5 className='mt-3'>This site is powered by :</h5>
            <div ><img className="w-50 mt-3" src={logo11} alt="" /></div>
          </div>
        </div>
      </div>
      <div className=" text-center text-white p-2 ">@ 2023 Fancy Agancy all right reserved</div>
    </footer>
    </div>


    
    
  </>
}
