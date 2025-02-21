import react from 'react'
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from 'react-router';
function Layout(){
    return (
       <>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>

        </div>
        </>
    )   
};
export default Layout;