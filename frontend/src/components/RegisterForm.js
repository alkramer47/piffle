import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name:'', password:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
      const target = event.target;
      const value = target.value;
      const name = target.name; 
      this.setState({
        name: value
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
              value={this.state.value} 
              onChange={this.handleChange} 
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input 
              placeholder='Password'
              type="text"
              value={this.state.value} 
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