import React, {useState} from 'react';
import styles from '../component_styles/Home.module.css';

function LoginForm({Login, Register, error}){
    const[details, setDetails] = useState({name:"", email:"", password:""});

    /* Function to handle when Login button is clicked */
    const loginHandler = e => {
        e.preventDefault();
        console.log("Login Button Clicked");
        Login(details);
    }

    /* Function to handle when Register button is clicked */
    const registerHandler = e => {
        e.preventDefault();
        console.log("Register Button Clicked");
        Register();
    }

    return (
        <div>
            <form>
                    <div className={styles.form_inner}>
                        <h2>Login</h2>
                            {(error != "") ? (<div className="error">{error}</div>) : ""}
                        <div className={styles.form_group}> 
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                        </div>
                        <div className={styles.form_group}>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                        </div>
                        <input type="submit" onClick={loginHandler} value="Login" className={styles.submitButton}/>
                        <input type="submit" onClick={registerHandler} value="Sign up" className={styles.submitButton}/>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;