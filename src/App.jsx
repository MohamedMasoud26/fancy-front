import '@splidejs/react-splide/css';
import './App.css';
import {Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
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
import Dashboard from './dashboard/Dashboard';
import AddRecent from './dashboard/AddRecent/AddRecent';
import Cookies from 'js-cookie';








function App() {
  console.log(Cookies.get())
            const encodeToken = Cookies.get('accessToken');
            console.log(encodeToken)
  // if(!Cookies.get('refreshToken')){
  //   localStorage.removeItem('userData')
  // }
  let storedData= JSON.parse(localStorage.getItem('userData'));
  console.log(storedData?.role)

  let routers = createBrowserRouter([
    { path: 'getstarted', element: <GetStarted /> },
    {
      path: '', element: < Layout />, children: [
        {path: '', element: <About />, children: [
            { path: 'team', element: <Team /> },
            { path: 'company', element: <Company /> },
            { path: 'site', element: <Site /> },
          ]
        },
        { path: 'services', element: <Services /> },
        { path: 'works', element: <Works /> },
        { index: true, element: <Home /> },
        { path: 'contact', element: <Contact /> },
        { path: 'login', element: storedData ? <Navigate to="/" /> : <Login /> },
        { path: 'register', element: storedData ? <Navigate to="/" /> : <Register /> },
        
  
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: 'dashboard',
      element: storedData?.role === "Admin" ? <Dashboard /> :<Navigate to="/" />,
      children: [
        { path: 'addRecent', element: <AddRecent /> }
      ]
    } ,
  ])
  return <RouterProvider router={routers}></RouterProvider>

}

export default App
