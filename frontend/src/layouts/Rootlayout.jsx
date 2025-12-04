import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollableNavbarMenu from '../components/Scrollable Navbar Component/Scrollablenavbar';
import ScrollTop from '../components/Click To Scroll Top Component/Scrolltop';
import Footer from '../components/Footer Component/Footer';

function Rootlayout() {
    
    return (

        <>
            
            <ScrollTop/>
            
            <NavBar />

            <div style={{width: "100%", height: "100%"}}>
            
                <Outlet />
                
            </div> 

            <ScrollableNavbarMenu />

            <Footer/>
            
        </>

    );

}

export default Rootlayout;