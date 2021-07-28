import React, { Component } from 'react';
import './mlogin.css';
// import Service from './service'
import Nav from './newnav';
// import Navbar from './AfterLogin/Navbar';
import LoginIntro from './AfterLogin/LoginIntro';
const UsernameRE = new RegExp(/^[\w-+]+(\.[\w]+)*@[\w-]+(\.[\w]+)*(\.[a-z]{2,})$/);
// const PasswordRE = new RegExp(/^[0-9]{9,25}$/);
class Mlogin extends Component {
    state = { 
        emailAddress : "",
        password : "",
        emailError: "",
        flag: true,
        login : false,
        store : null,
        isLoading : true
     }
     componentDidMount(){
        this.storeCollector()
     }
     storeCollector(){
         let storage = JSON.parse(localStorage.getItem('login'));
         if(storage && storage.login){
              this.setState({login:true,store:storage})
         }
     }
     handleEmail = () =>{
        if(!UsernameRE.test(this.state.emailAddress)){
            let atoption = false
            let usernameError = "*Enter proper Username"
            this.setState({emailError : usernameError})
            this.setState({flag:atoption})
        }
        else{
            let UserNameError = ""
            let option1 = true
            this.setState({emailError : UserNameError})
            this.setState({flag:option1})
        }
     }
     forgetfunction =() =>{
        this.props.history.push("/forgetpassword");
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        // const isValid = this.validate();
        this.handleEmail();
        if(this.state.flag){
            this.setState({isLoading : false})
        const loginObj = {
            emailAddress : this.state.emailAddress,
            password : this.state.password
        }
        console.log(this.state)
        const login = JSON.stringify(loginObj)
            fetch('https://on-cloud-web-service.azurewebsites.net/web/login',{
                method : 'PUT',
                headers : 
                {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body:login
            }).then(res => 
                {
                    console.log(res)
                    this.setState({isLoading : this.state.flag})
                    const statusCode = res.status;
                    const data = res.json();
                    return Promise.all([statusCode, data]);
                }).then(data => {
                          console.log(data)
                          if(data[0] === 200){
                          if(data[1].registerResponse === "Login Successfully"){
                            // window.location.reload(false);
                            localStorage.setItem('login',JSON.stringify({
                                login:true,
                                text:data[1].registerResponse
                            }))
                              alert('Login Successfully')
                              this.props.history.push("/LoginIntro");
                          }
                          else if(data[1].registerResponse === null){
                              alert('Invalid Username')
                          }
                        }
                        else if(data[0] === 400){
                            if(data[1].details === "Password Mismatch"){
                            alert('Invalid Password')
                        }else{
                            alert(data[1].details)
                        }
                    }
                        else{
                            alert('Internal Server Error!!')
                        }
                  }
              ).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
                alert('Internal Server Error!!')
              });
          }         
        }          
    render() { 
        return ( 
            <div>
                {
                !this.state.login? 
                <div>
                    <Nav/>
        <div className="login-Container">
                <div className="center">  
            <form 
                 onSubmit = {(event)=> this.handleSubmit(event)}>
                      <h1>Login</h1>
        <div className="txt_field">
            <input type="text" 
            value={this.state.emailAddress} 
            onChange = {(event) => this.setState({emailAddress : event.target.value})}
            title="Enter valid Email" required/>
             <span></span>
            <label>UserName</label>
        </div> 
        <div><h6>{this.state.emailError}</h6></div>
         <div className="txt_field">
            <input type = "password" 
             value={this.state.password}
             onChange = {(event) => {
                 this.setState({password : event.target.value}) 
                 this.handleEmail();
                }}
            pattern="[0-9]{9,25}"
             title="Please enter valid password" required/>
            <span></span>
            <label>Password</label>
        </div>
        <input type="submit"
        // {...this.state.isLoading ? 'value = Login' : 'value = Loading'}
        value = {this.state.isLoading ? "Login" : "Loading..."}/>
        <div className="pass" onClick = {this.forgetfunction}>Forgot Password?</div>    
        <div className="signup_link">
        {/* eslint-disable-next-line */}
            Not a member?<a href="/signup">Signup</a> 
        </div> 
    </form>     
</div>
</div> 
</div> 
 :
 <div>
     <LoginIntro/>
 </div>
} 
            </div>
         );
    }
}
export default Mlogin;
