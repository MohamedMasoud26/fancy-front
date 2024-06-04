import React, { useState } from 'react'
import AddRecent from './AddRecent/AddRecent'
import styles from './Dashboard.module.css'
import logo from '../../src/images/logo1.png'
import nour from '../../src/images/teams/nour.jpg'
import AllRecent from './AddRecent/AllRecent'

function Dashboard() {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
    <>
      <div className={`${styles.back_ground}`}>
      <div className={` container-fluid`}>

<nav className={`navbar   bg-light  ${styles.sd_header} ${styles.navbar}`}>
  <div className="container-fluid ">
    <a className="navbar-brand col-2" href=""><img className='logo-img' src={logo} alt="fancy agancy" /></a>
    <div className="form-inline ml-auto">
      <div className={`${styles.menu}`} onClick={ToggleSidebar} >
        <i className="fa fa-bars"></i>
      </div>
    </div>
  </div>
</nav>




<div className={` mt-2  ${styles.sidebar} ${isOpen == true ? `${styles.active}` : ''}`}>
  <div  className=' text-center'>
    <div className={`${styles.sd_header} justify-content-center `}>
      <img className={` ${styles.user_img}`} src={nour} alt="" />
    </div>
    <h4 className="mb-0">Nour <span className='fs-4'>Saber</span> <span className={`${styles.role}`}>Admin</span></h4>
  </div>
  <div className={`${styles.sd_body}`}>
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
        </div>
      </div>
    </div>
    ``

  </div>
</div>
<div className={`${styles.sidebar_overlay} ${isOpen == true ? `${styles.active}` : ''}`} onClick={ToggleSidebar}></div>
</div>
<br />
<div className="container">
<AddRecent />
<AllRecent/>
</div>
      </div>

    </>
  )
}

export default Dashboard