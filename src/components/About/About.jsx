import React from 'react'
import { Outlet } from 'react-router-dom'
import Company from '../Company/Company'

import Team from '../Team/Team';
import Site from '../Site/Site';
export default function About() {
  return <>
    <Outlet></Outlet>
    
  </>
}
