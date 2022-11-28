import React, {useState} from 'react';
import styles from '../component_styles/Register.module.css';

function RegisterForm({createAccount, error}){
  const[details, setDetails] = useState({username:"", email:"", password:"", confirmPass:""});

  const registrationHandler = e => {
    e.preventDefault();
    console.log("Create Account button clicked");
    createAccount(details);
  }

  return (
    <div>
        <form className={styles.register_form}>
                <div className={styles.form_inner}>
                    <h2>Register an Account</h2>
                        {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className={styles.form_group}> 
                        <label className={styles.form_label} htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                    </div>
                    <div className={styles.form_group}>
                        <label className={styles.form_label} htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className={styles.form_group}>
                        <label className={styles.form_label} htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div className={styles.form_group}>
                        <label className={styles.form_label} htmlFor="password">Retype Password:</label>
                        <input type="password" name="confirmPass" id="confirmPass" onChange={e => setDetails({...details, confirmPass: e.target.value})} value={details.confirmPass}/>
                    </div>
                    <input type="submit" onClick={registrationHandler} value="Create Account" className={styles.submitButton}/>
            </div>
        </form>
    </div>
  );
}

export default RegisterForm