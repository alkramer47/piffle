import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import styles from '../../component_styles/Register.module.css';

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState([""]);

    /* This function is where we will handle backend for creating an account */
    const createAccount = details => {
        
        // if(details.name != "" && details.email != "" && details.password == details.confirmPass){
        //     console.log("Valid Registration Information");
        //     setUser({
        //         name: details.name,
        //         email: details.email
        //     });
        //     navigate("/Conversations");
        // } else{
        //     setError("Registration invalid");
        // }

        if(details.name === ""){
            setError("Please enter your name");
        } else if (details.email === ""){
            setError("Please enter your email");
        } else if (details.password !== details.confirmPass){
            setError("Please ensure both passwords match");
        }else{
            console.log("Valid Registration Information");
            setUser({
                name: details.name,
                email: details.email
            });
            navigate("/Conversations");
        }
    }
    
    return (
        <div className={styles.Register}>
            <RegisterForm createAccount={createAccount} error={error}/>
        </div>
    );
}

export default Register;