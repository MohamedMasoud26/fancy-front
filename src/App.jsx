import '@splidejs/react-splide/css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Company from './components/Company/Company';
import Team from './components/Team/Team';
import Site from './components/Site/Site';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import  {jwtDecode}  from 'jwt-decode';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';









function App() {

const [userData,setUserData]=useState(null);

useEffect(() =>{
   if (localStorage.getItem('token')){
    saveUser()
   }

},[]);
function saveUser(){
    let encodeToken=localStorage.getItem('token');
    if (encodeToken) {
      let decoded= jwtDecode(encodeToken)
      console.log(decoded);
      setUserData(decoded);
    }
}


  let routers = createBrowserRouter([
    { path: 'getstarted', element: <GetStarted /> },
    {
      path: '', element: < Layout userData={userData} setUserData={setUserData}/>, children: [
        {path: '', element: <About />, children: [
            { path: 'team', element: <Team /> },
            { path: 'company', element: <Company /> },
            { path: 'site', element: <Site /> },
          ]
        },
        { path: 'services', element: <Services /> },
        { path: 'works', element: <Projects /> },
        {path:'ProjectDetails/:id', element:<ProjectDetails/>},
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login saveUser={saveUser} /> },
  
  
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  return <RouterProvider router={routers}></RouterProvider>

}

export default App
