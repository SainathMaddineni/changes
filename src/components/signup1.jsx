import React, { Component } from 'react';
import "./signup1.css";
import Nav from './newnav';
const mobileRe = new RegExp(/^[0-9]{10}$/);
class SignUp1 extends Component {
    state = { 
            firstname :"",
            lastname : "",
            emailAddress :"",
            country:"INDIA",
            password:"",
            address:"",
            pincode:"",
            phonenumber :"",
            confirmpassword : "",
            confirmpasswordError:"",
            phoneError : ""
                }

            handleError = () =>{
                console.log("error handled called");
                if(this.state.confirmpassword !== this.state.password) 
                {
                    let confirmpassworderror;
                    confirmpassworderror = "Both passwords Should Match";
                    this.setState({confirmpasswordError:confirmpassworderror})
                    return false;
                }
                else { 
                    let confirmpassworderror;
                    confirmpassworderror = " ";
                    this.setState({confirmpasswordError: confirmpassworderror})
                    return true;
                }   
            }
            handlephoneerror = () =>{
                if(!mobileRe.test(this.state.phonenumber))
                {
                    console.log('iam error in number')
                     let phonenumberError="invalid phone number"
                     this.setState({phoneError : phonenumberError})
                     return false
                }else {
                    let phonenumberError=" "
                    this.setState({phoneError : phonenumberError})
                    return true
                }
            }

            handlephonenumber = (event) =>{
                this.setState({phonenumber : event.target.value});
                this.handleError();
                 }

            handleconfirmpassword = (event) =>{
                this.setState({confirmpassword: event.target.value});
                }

                handleSubmit1 = (event) =>{
                    event.preventDefault();
                    this.handleError();
                    console.log(this.state.flag)
                    // const isValid = this.validate();
                    let flag = this.handleError();
                    let flag2 = this.handlephoneerror();
                    if(flag && flag2)
                    {

                    const register = 
                    {

                        firstName : this.state.firstname,
                        lastName : this.state.lastname,
                        mobileNumber :this.state.phonenumber ,
                        emailAddress : this.state.mail,
                        password : this.state.password,
                        address : this.state.address,
                        zipCode : this.state.pincode,
                        country : this.state.country
                    }; 
                    // console.log(this.state)
                    const registerReq = JSON.stringify(register)
                    console.log(registerReq)
                    fetch('https://on-cloud-web-service.azurewebsites.net/web/register',{
                        method : 'POST',
                        headers : 
                        {
                            'Accept' : 'application/json',
                            'Content-Type' : 'application/json'
                        },
                        body:registerReq
                    }).then(res => {
                        console.log(res)
                        const statusCode = res.status;
                        const data = res.json();
                        return Promise.all([statusCode, data]);

                    }
                    ).then(data => {
                        console.log(data)
                          if(data[0] === 200){
                          if(data[1].registerResponse === "Congrats successfully completed registration")
                          {
                              alert('Registration Successfully')
                              this.props.history.push("/login");
                          }
                          else if(data[1].registerResponse === null)
                          {
                              alert('Email Already Used')
                          }
                        }
                        else if(data[0] === 400)
                        {
                            alert(data[1].details)
                        }
                        else
                        {
                            alert('Internal Server Error')
                        }
            }
            ).catch(err => {
                // Do something for an error here
                console.log("Error Reading data " + err);
                alert('Internal Server Error')
              });
                }
            }
    render() { 
        return ( 
            <div>
                <Nav/>
                <div className="signup1container">
                <form  onSubmit = {(event)=>this.handleSubmit1(event)} >
                     <div className="signup1form">


                    <div className="signupheading"><h1>Registration</h1></div>
                        <div>
                        <div>
                            <div className="rsignup-row"> 

                                <div><label className="lablestyle">First Name  </label></div>
                                  <div><input type="text" className="signupin" 
                                placeholder="Enter the First name"
                                pattern="^[a-zA-Z]+$" 
                                value={this.state.firstname}
                                onChange = {(event) => this.setState({firstname : event.target.value})}
                                title="Spaces are not allowed" 
                                required /></div>
                            </div><br></br>
                            <div className="rsignup-row">
                                <div><label className="lablestyle">Last Name  </label></div>
                                <div><input type="text" className="signupin" 
                                placeholder="Enter the Last name" 
                                value={this.state.lastname}
                                onChange = {(event) => this.setState({lastname : event.target.value})}
                                pattern="^[a-zA-Z]+$" 
                                title="Spaces are not allowed" required /></div>
                            </div><br></br>
                            <div className="rsignup-row">
                                <div><label className="lablestyle">Address  </label></div>
                                <div><textarea name="" id="" cols="22" rows="3" className="signupin-add"
                                placeholder="Enter the Address"
                                value={this.state.address}
                                onChange = {(event) => this.setState({address : event.target.value})}
                                 required></textarea></div>
                            </div><br></br>

                            <div className="rsignup-row">
                              <div><label className="pincodelable lablestyle">Pincode  </label></div>
                              <div><input type="text" className="picode signupin" 
                               placeholder="Enter the Zip code"
                               pattern="[0-9]{6}"
                               value={this.state.pincode}
                               onChange = {(event) => this.setState({pincode : event.target.value})}
                               title="Enter Valid Pin Code" required /></div>
                            </div><br></br>

                            <div className="rsignup-row">
                             <div><label className="lablestyle">Country  </label></div>
                             <div> <select className="country" 
                             value={this.state.country}
                             onChange = {(event) => this.setState({country : event.target.value})}
                                 >
                             <option value="INDIA">India</option>
                             <option value="USA">USA</option>
                             <option value="CANADA">Canada</option>
                             <option value="AUSTRALIA">Australia</option>


                          </select>
                          </div>
                            </div><br></br>

                            <div className="rsignup-row">
                             <div><label className="lablestyle">Email  </label></div>

                             <div><input type="email" className="signupin" 
                             placeholder="abc@example.com"
                              value={this.state.mail || ''}
                             onChange = {(event) => this.setState({mail : event.target.value})}
                              title="invalid email" required/></div>
                           </div><br></br>

                           <div className="rsignup-row">
                            <div><label className="lablestyle">Password  </label></div>

                            <div><input type="password" className="signupin" 
                            placeholder="Enter the Password" 
                            pattern="^[0-9]{9,25}$" 
                            value={this.state.password}
                                onChange = {(event) => this.setState({password : event.target.value})}
                            title="only numbers and length should be (9-25)" required /></div>
                         </div>
                         <div className="passwordtitle"><p>Only Numbers 9-25 </p></div>
                         {/* <br></br> */}

                         <div className="rsignup-row">
                           <div><label className="lablestyle">Confirm Password </label></div>

                           <div><input type="password" className="signupin" 
                           placeholder="Enter the Password"
                            pattern="^[0-9]{9,25}$" 
                            value={this.state.confirmpassword}
                            onChange = {this.handleconfirmpassword}


                            title="Both passwords Should Match" required/></div>
                         </div><br></br>
                         <div className="rsignup-row"></div>
                             <div className="handlingerror">{this.state.confirmpasswordError}</div>
                         </div>

                         <div className="rsignup-row">
                           <div><label className="lablestyle">Phone Number  </label></div>

                           <div>
                               <div className="country-code">
                                   <select name="phonenumber"  className="signuppn" >
                               <option defaultValue="+91">+91</option>
                               <option value="+1">+1</option>
                               <option value="+61">+61</option>
                               <option value="+1">+1</option>
                               </select> {""} {""} </div>
                           <div><input type="number" className="phoneinput signupin"
                            placeholder="Enter the mobile number"
                            value={this.state.phonenumber || ''}
                                onChange = {this.handlephonenumber}
                              pattern="^[0-9]{10}$"
                             title="Enter valid Mobile number" required/></div></div>
                        </div>
                        
                        <div className="rsignup-row"></div>
                             <div className="handlingerror">{this.state.phoneError}</div>
                         </div>

                        <div >
                        <button type="submit" >Submit</button>
                        <p className="signuppara">Already have a account ? <a href="/login">Login</a></p>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
         );
    }
}
export default SignUp1;