import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPortfolioDetails } from '../../../features/Portfolio Page Project/PortfolioSlice';
import PortfolioPageProjectShowCasingSectionProjectsWork from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsectionprojectswork';

function Portfoliopageprojectshowcasingprojectsection({PortfolioPageStyle}) {

    const { portfolioitems: portfolio, status } = useSelector((state) => state.portfolio);
    const dispatch = useDispatch();
    
    useEffect(() => { 
    
        if (status === 'idle') {
                
            dispatch(fetchPortfolioDetails());
    
        }
         
    }, [status, dispatch]);
    
    if (status === 'loading') return (

        <div className={PortfolioPageStyle.portfolioFetchingMessage}>

            

        </div>

    );

    if (status === 'failed') return (
    
        <div className={PortfolioPageStyle.portfolioErrorMessageDiv}>
    
            <img src="../../../../public/images/Portfolio Page Images/Robot Images/smart_robot_2.png" alt="Error Message Robot" />
            <span> Something went wrong try again later... </span>
    
        </div>
    
    );
    
    return (

        <>
        
            {/** Project Page Project Showcasing Project Work Section */}
            <div className={PortfolioPageStyle.portfolioPageShowCasingSection}>

                {/** Portfolio Showcasing Inner Section */}
                <div className={PortfolioPageStyle.portfolioPageInnerShowCasingSection}>

                    <PortfolioPageProjectShowCasingSectionProjectsWork
                    
                        PortfolioPageStyle={PortfolioPageStyle}
                        portfolio={portfolio}
                        
                    />
                
                </div>

            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingprojectsection;