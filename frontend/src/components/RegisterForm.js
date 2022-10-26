import React, {useState} from 'react';
import styles from '../component_styles/Register.module.css';

/*
class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '', 
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit(event) {
      alert('A name and password was submitted: ' + this.state.name + " " + this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}
            style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)'
          }}>
          <div>
            <label htmlFor='name'>Name</label>
            <br />
            <input 
              placeholder='Name'
              type="text"
              name="name"
              value={this.state.name} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <br />
            <input 
              placeholder='Email'
              type="text"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input 
              placeholder='Password'
              type="password"
              name="password"
              value={this.state.password} 
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Register account</button>
          </div>
        </form>
      );
    }
  }
*/

function RegisterForm({createAccount, error}){
  const[details, setDetails] = useState({name:"", email:"", password:"", confirmPass:""});

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
                        <label className={styles.form_label} htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
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