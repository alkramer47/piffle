import React, {useState} from "react";
import LoginForm from '../components/LoginForm';
import styles from '../component_styles/Home.module.css';
import { useNavigate } from "react-router-dom";
import {verifyLogin, login} from '../Backend';

const Home = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({username:""});
    const [error, setError] = useState([""]);

    const Login = async details => {
        console.log(details);

        try{
            await login(details.username, details.password);
            console.log("Logged in");
            setUser({
                       username: details.username
                    });
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

    const Logout = () => {
        console.log("Logout");
        setUser({username: ""});
    }

    return (
        <div className={styles.Home}>
            {(user.username !== "") ? (
                <div className={styles.welcome}>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout} className={styles.submitButton}>Logout</button>
                </div>
            ): (
               <LoginForm Login={Login} Register={Register} error={error}/> 
            )}
        </div>
    );
}

export default Home;