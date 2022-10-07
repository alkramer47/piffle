import React, {useState} from 'react';
import styles from '../component_styles/Home.module.css';

function LoginForm({Login, error}){
    const[details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
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
                        <input type="submit" value="Login"/>
                        <input type="submit" value="Sign up"/>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;