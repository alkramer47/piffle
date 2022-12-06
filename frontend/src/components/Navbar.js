import React from 'react';
import Puffle from '../assets/puffle_navbar.png';
import { useNavigate } from 'react-router-dom';
import NavBarDropDown from './NavBarDropDown';
import { isLoggedIn, logout } from '../Backend';
const Navbar = () => {
    const navigate = useNavigate();

    let options;
    if(isLoggedIn()) {
        options = [{
            label: "Profile",
            onClick: () => { navigate('/profile'); }
        }, {
        //     label: "Update password",
        //     onClick: () => { navigate('/updatepassword'); }
        // }, {
            label: "Logout",
            onClick: () => { logout().catch((error)=>alert(error)); navigate('/');}
        }];
    }
    else {
        options = []
    }

    const clickLogo = () => {
        let destination = isLoggedIn() ? "/conversations" : "/";

        //Reload page if we're already there
        if(document.location.pathname === destination) {
            navigate(destination);
            navigate(0);
        }
        else navigate(destination); //Do not reload if we're on a different path because it causes an error with fetch
    }

    return (
        isLoggedIn() ?
        <div
            className="appColor"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-between'
            }}>
            <div onClick={clickLogo} 
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
                <NavBarDropDown options={options} />
            </div>

        </div>
        : ""
    );
}

export default Navbar;