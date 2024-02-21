import React from 'react'
import Navlink from './Navlink';
import { Outlet,useNavigation } from 'react-router-dom';
import Footer from "./Footer"
import Breadcrumbs from '../pages/Breadcrumbs';
const Layout = () => {
  const navigation=useNavigation()
  const isLoding=navigation.state==="loading"
  return (
    <div>
        <Navlink/>
        <Breadcrumbs/>
        <main>
        {isLoding && <h1>Loding.....</h1>}
            <Outlet/>
        </main>
        <Footer/>
        
        </div>
  )
}

export default Layout;