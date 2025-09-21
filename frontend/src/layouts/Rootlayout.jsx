import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollableNavbarMenu from '../components/Scrollable Navbar Component/Scrollablenavbar';

function Rootlayout() {
    
    return (

        <>
        
            <NavBar />

            <div style={{width: "100%", height: "100%"}}>
            
                <Outlet />
                
            </div> 

            <ScrollableNavbarMenu />
            
        </>

    );

}

export default Rootlayout;