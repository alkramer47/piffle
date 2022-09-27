import React, {useState} from "react";
import LoginForm from '../components/LoginForm';
import '../routes/Home.css'

const Home = () => {
    /* Test user to see successful login */
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState([""]);

    const Login = details => {
        console.log(details);

        /* This is where we will handle User information with DB */
        if(details.email == adminUser.email && details.password == adminUser.password){
            console.log("Logged in");
            setUser({
               name: details.name,
               email: details.email 
            });
        } else {
            console.log("Incorrect Username and/or Password");
            setError("Incorrect Username and/or Password")
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({name: "", email: ""});
    }

    return (
        <div className="Home">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ): (
               <LoginForm Login={Login} error={error}/> 
            )}
        </div>
    );
}

export default Home;