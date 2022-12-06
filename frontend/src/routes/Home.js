import React, {useEffect, useState} from "react";
import LoginForm from '../components/LoginForm';
import styles from '../component_styles/Home.module.css';
import { useNavigate } from "react-router-dom";
import {isLoggedIn, login} from '../Backend';

const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState([""]);
    
    useEffect(() => {
        if(isLoggedIn()) navigate("/conversations");
    });

    const Login = async details => {
        console.log(details);

        try{
            await login(details.username, details.password);
            console.log("Logged in");
            navigate("/Conversations");
        }catch(error){
            console.log("Incorrect Username and/or Password");
            setError("Incorrect Username and/or Password");
        }
    }

    const Register = () => {
        console.log("REGISTERING");
        navigate("/Register");
    }

    return (
        <div className={styles.Home}>
            <LoginForm Login={Login} Register={Register} error={error}/> 
        </div>
    );
}

export default Home;