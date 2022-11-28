import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import styles from '../../component_styles/Register.module.css';
import {register} from '../../Backend.js'

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState([""]);

    const createAccount = async details => {
        if(details.username === ""){
            setError("Please enter your name");
        } else if (details.email === ""){
            setError("Please enter your email");
        } else if (details.password !== details.confirmPass){
            setError("Please ensure both passwords match");
        }else{
            console.log("Valid Registration Information");
            try{
                await register(details.username, details.password);
            }catch(error){
                console.log(error);
            }
            alert("Account Created Successfully!");
            navigate("/");
        }
    }
    
    return (
        <div className={styles.Register}>
            <RegisterForm createAccount={createAccount} error={error}/>
        </div>
    );
}

export default Register;