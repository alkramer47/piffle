import React from 'react';

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
      const { name, password } = this.state
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

export default RegisterForm