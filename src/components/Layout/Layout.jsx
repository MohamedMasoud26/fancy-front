import{ useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import GetStarted from '../GetStarted/GetStarted'
import Cookies from 'js-cookie';
export default function Layout() {

  const [loading, setLoading] = useState(true);
  let nav=useNavigate()
  function logOut(){
    localStorage.removeItem('userData')
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    nav('/login')
    window.location.reload();

  }

  useEffect(() => {
    const simulateLoading = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setLoading(false);
    };

    simulateLoading();
  }, []);


  return (
    <>
        {/* {loading ? <GetStarted/> : <div id='all-content' className=" ">
        <Navbar></Navbar>
        <div className="container "><Outlet></Outlet></div>
        <Footer></Footer>
        </div>} */}
        <Navbar  logOut={logOut}></Navbar>
        <div className=""><Outlet></Outlet></div>
        <Footer></Footer>
        
        
        
    </>
  )
}
