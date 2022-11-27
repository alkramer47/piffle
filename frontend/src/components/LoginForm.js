import React, {useState} from 'react';
import styles from '../component_styles/Home.module.css';

function LoginForm({Login, Register, error}){
    const[details, setDetails] = useState({username:"", password:""});

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
            <form className={styles.login_form}>
                    <div className={styles.form_inner}>
                        <h2>Login</h2>
                            {(error !== "") ? (<div className="error">{error}</div>) : ""}
                        <div className={styles.form_group}>
                            <label className={styles.form_label} htmlFor="username">Username:</label>
                            <input type="username" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                        </div>
                        <div className={styles.form_group}>
                            <label className={styles.form_label} htmlFor="password">Password:</label>
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