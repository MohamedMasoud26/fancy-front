/* eslint-disable react/no-unknown-property */

import nour from "../../images/teams/nour.jpg";
import mariam from "../../images/teams/mariam.jpg";
import hager from "../../images/teams/hager.jpg";
import styles from '../Team/teams.module.css';
export default function Team() {
  return <>
  <div className=" container my-5 pb-5">
  <div className="row">
    <div className={styles.teamWrapper}>
    <div className={styles.container}>
    <div className="row justify-content-center">
    <div className={styles.bgColor}>
      <h1 align="center">Team of Fancy Agancy</h1>
      <p align="center">Delight To Serve You</p>
      </div>
    </div>
      <div className="row pt-5 mt-5 pt-lg-0 mt-lg-2">
        <div className="col-lg-4 py-3 my-2">
        <div className={styles.colmun}>
          <div className={styles.teamcol}>
            <div className={styles.teamcolinner}>
              <div className={styles.avatar}><img className='' src={nour} alt="Nour Saber"/></div>
              <div className={styles.memberName}> <h2 align="center">Nour Saber</h2> </div>
              <div className={styles.memberInfo}><p align="center">Founder / Manager of Fancy Agancy
              <br/>
              Senior Graphic Designer | Motion Graphic</p></div>
              <div className={styles.memberMail}> <p className={styles.a} align="center"> noursaber302@gmail.com </p> </div>
              <div className={styles.memberSocial}> 
                <ul className={styles.socialListing}>
                <li><a href="https://www.facebook.com/profile.php?id=100092276270994&mibextid=ZbWKwL"><i className="fa-brands fa-square-facebook"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/nour-saber-05270219a"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://www.behance.net/noorsaber1"><i className="fa-brands fa-behance"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-lg-4 py-5 my-5">
        <div className={styles.colmun}>
          <div className={styles.teamcol}>
            <div className={styles.teamcolinner}>
              <div className={styles.avatar}><img src={hager} alt="Hager Elwakiel "/></div>
              <div className={styles.memberName}> <h2 align="center">Hager Elwakiel</h2> </div>
              <div className={styles.memberInfo}><p align="center">Moderator of Fancy Agancy </p></div>
              <div className={styles.memberMail}> <p className={styles.a} align="center">hagerelwakiel302@gmail.com </p> </div>
              <div className={styles.memberSocial}> 
                <ul className={styles.socialListing}>
                <li><a href="https://www.facebook.com/profile.php?id=100088458626623"><i className="fa-brands fa-square-facebook"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/jai-elwakiel-61439a1b3/"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://www.behance.net/jaielwakiel"><i className="fa-brands fa-behance"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-lg-4 py-3 my-2">
        <div className={styles.colmun}>
          <div className={styles.teamcol}>
            <div className={styles.teamcolinner}>
              <div className={styles.avatar}><img src={mariam} alt="Mariam Gamal"/></div>
              <div className={styles.memberName}> <h2 align="center">Mariam Gamal</h2> </div>
              <div className={styles.memberInfo}><p align="center">Content Creator of Fancy Agancy </p></div>
              <div className={styles.memberMail}> <p className={styles.a} align="center">mariamgamal302@gmail.com </p> </div> 
              <div className={styles.memberSocial}> 
                <ul className={styles.socialListing}>
                  <li><a href="https://www.facebook.com/mrym.bahaaa"><i className="fa-brands fa-square-facebook"></i></a></li>
                  <li><a href="https://www.facebook.com/mrym.bahaaa"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li><a href="https://www.facebook.com/mrym.bahaaa"><i className="fa-brands fa-behance"></i></a></li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>  
  </div>
  </div>
  </div>
    
  </>
}
