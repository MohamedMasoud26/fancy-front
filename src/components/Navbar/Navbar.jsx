// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo1.png'
import logo12 from '../../images/logo2.png'
import { useEffect, useState } from "react";
import $ from "jquery";

export default function Navbar({ logOut }) {
  let storedData= JSON.parse(localStorage.getItem('userData'));
  console.log(storedData);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        $(".navbar").css("position", "fixed");
      } else {
        setShowButton(false);
        $(".navbar").css("position", "unset");
      }
    });

  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'

    });
  };



  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <i className="fa-solid fa-arrow-up fa-1x  p-2"></i>
        </button>
      )}
      <nav className="container-fluid navbar  ">
        <div className="container-fluid ps-4">
          <a className="navbar-brand col-2" href="/"><img className='logo-img' src={logo} alt="fancy agancy" /></a>
          <div className="navbar-item d-flex justify-content-between man2 col-9   ">

            <ul className="navbar-nav man    mb-lg-0 ps-5 ">
              <li className="nav-item    ">
                <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link onClick={scrollToTop} className="nav-link dropdown-toggle" to="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About
                </Link>
                <ul className="dropdown-menu position-absolute mt-2 ">
                  <li><Link onClick={scrollToTop} className="dropdown-item" to="company">About Company</Link></li>
                  <li><Link onClick={scrollToTop} className="dropdown-item" to="team">Our Team</Link></li>
                  <li><Link onClick={scrollToTop} className="dropdown-item" to="site">About Site</Link></li>

                </ul>
              </li>
              <li className="nav-item ">
                <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="services">Services</Link>
              </li>
              <li className="nav-item  ">
                <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="works">Our Works</Link>
              </li>
              <li className="nav-item ">
                <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="contact">Contact Us</Link>
              </li>

              <li>

              </li>
            </ul>
            <ul className="navbar-nav man  mb-lg-0 ">

              {!storedData && <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="login">Login</Link>
              </li>}
              {!storedData && <li className="nav-item  ">
                <Link className="nav-link active" aria-current="page" to="register">Register</Link>
              </li>}
              {(storedData?.role=="Admin") && <div className="nav-item  ">
                <Link className="nav-link active" aria-current="page" to="dashboard"><i className="fa-solid fa-gears fs-5"></i></Link>
              </div>}
              {storedData && <li className="nav-item d-flex ">
                <span className="nav-link active" aria-current="page" onClick={logOut}><i className="fa-solid fa-right-from-bracket fs-5"></i></span>
                <div className="profile-pic ms-3">
                  <img src={storedData?.userImage} alt="Profile Picture" />
                </div>
              </li>}



            </ul>

          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img className='w-75' src={logo12} alt="fancy agancy" /></h5>

              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item ">
                  <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link onClick={scrollToTop} className="nav-link dropdown-toggle" to="about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </Link>
                  <ul className="dropdown-menu position-absolute">
                    <li><Link onClick={scrollToTop} className="dropdown-item" to="company">About Company</Link></li>
                    <li><Link onClick={scrollToTop} className="dropdown-item" to="team">Our Team</Link></li>
                    <li><Link onClick={scrollToTop} className="dropdown-item" to="site">About Site</Link></li>
                  </ul>
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
              <ul className="row navbar-nav  flex-grow-1 pe-3 d-flex flex-row ">

                {!storedData && <li className="nav-item col-3">
                  <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="login">Login</Link>
                </li>}
                {!storedData && <li className="nav-item col-3 ">
                  <Link onClick={scrollToTop} className="nav-link active" aria-current="page" to="register">Register</Link>
                </li>}
                {(storedData?.role == "Admin") && <li className="nav-item  col-3">
                  <Link className="nav-link active" aria-current="page" to="dashboard"><i className="fa-solid fa-gears fs-5"></i></Link>
                </li>}
                {storedData && <li className="nav-item col-3">
                  <span className="nav-link active" aria-current="page" onClick={logOut}><i className="fa-solid fa-right-from-bracket fs-5"></i></span>
                </li>}
                {storedData && <li className="profile-pis ">
                    <img src={storedData?.userImage} alt="Profile Picture" />
                  </li>}


              </ul>

            </div>

          </div>

        </div>

      </nav>



    </>
  )
}
