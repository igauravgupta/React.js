import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout.jsx";
import Home from "../Components/Home/Home.jsx";
import AboutUs from "../Components/AboutUs/AboutUs.jsx";
import ContactUs from "../Components/ContactUs/ContactUs.jsx";
export default function WebRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/home" element={<Home />} />  
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contactus" element={<ContactUs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

// here about us and contact us are child routes of "/home" route > these will render in place of Outlet in Layout page.

/* 
        <Route path='user/' element={<User />} >
            <Route path=':userid' element={<User />} />
        </Route> 
*/
// this is for sending params 