import React from 'react';
import Puffle from '../assets/puffle_navbar.png';
import { useNavigate } from 'react-router-dom';
import NavBarDropDown from './NavBarDropDown';
const Navbar = () => {
    const navigate = useNavigate();

    let options;
    //if(isLoggedIn())
    if(true) { //TODO Build isLoggedIn
        options = [{
            label: "Profile",
            onClick: () => { navigate('/profile'); }
        }, {
            label: "Update password",
            onClick: () => { navigate('/updatepassword'); }
        }, {
            label: "Logout",
            onClick: () => { /*logout().catch((error)=>alert(error)); */navigate('/'); /*TODO Build logout*/}
        }];
    }
    else {
        options = [{
            label: "Profile",
            onClick: () => { navigate('/profile'); }
        }, {
            label: "Update password",
            onClick: () => { navigate('/updatepassword'); }
        }, {
            label: "Logout",
            onClick: () => { /*logout().catch((error)=>alert(error)); */navigate('/login'); /*TODO Build logout*/}
        }]
    }

    const goHome = () => { 
        //Reload page if we're already at "/"
        if(document.location.pathname === "/") {
            navigate("/");
            navigate(0);
        }
        else navigate("/"); //Do not reload if we're on a different path because it causes an error with fetch
    }

    //TODO Temp function to stand in for isLoggedIn function checking access token. Delete this function when isLoggedIn is implemented
    const isLoggedIn = () => true;

    return (
        isLoggedIn() ?
        <div
            className="appColor"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-between'
            }}>
            <div onClick={goHome} 
                style={{
                    display: "flex", 
                    flexDirection: "column", 
                    cursor: "pointer",
                    marginTop: "10px",
                    marginLeft: "18px",
                    marginBottom: "10px"
                }}>
                <img src={Puffle} width="50" alt=""/>
            </div>

            <div style={{ display: 'flex', alignItems: 'center'}}>
                <div id="google_translate_element"></div>
                <NavBarDropDown options={options} />
            </div>

        </div>
        : ""
    );
}

export default Navbar;