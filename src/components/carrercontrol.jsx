import React, { Component } from 'react';
import "./carrercontrol.css";
import Nav from './newnav';

// const initialCarrerControl=
// {
//     location : "",
//     joiningdate : "",
//     jobrole : "",
//     salaryrange : "",
//     description : ""
    
// }

class CarrerControl  extends Component {
    state = {
    location : "",
    joiningdate : "",
    jobrole : "",
    salaryrange : "",
    description : ""
    }
    constructor () {
        super()
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlelocation = (event) =>{
        this.setState({location : event.target.value});
    }
    handlejoiningDate = (event) =>{
        this.setState({joiningdate : event.target.value});
    }
    handlejobRole = (event) =>{
        this.setState({jobrole : event.target.value});
    }
    handlesalaryRange = (event) =>{
        this.setState({salaryrange : event.target.value});
    }
    handledescription = (event) =>{
        this.setState({description : event.target.value});
    }
    // handledValid =(event) =>{
    //     console.log("initial called")
    //     this.setState(initialCarrerControl)
    // }
     
    handlesubmit = event =>{
        event.preventDefault();
        console.log("i am valid");
        // this.setState({location:"",joiningdate:"",jobrole:"",salaryrange:"",description:""})
        // console.log(this.state);
        


     
        const carrercontrol = 
        {
            location : this.state.location,
            joiningDate : this.state.joiningdate,
            jobRole :this.state.jobrole ,
            salaryRange : this.state.salaryrange,
            description : this.state.description
        };
        const carrerControl = JSON.stringify(carrercontrol)
       
        fetch('https://on-cloud-web-service.azurewebsites.net/web/adminCarrerControl',{
            method : 'POST',
            headers : 
            {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:carrerControl
        }).then(res => {

          console.log(res)

          const statusCode = res.status;
          if(statusCode === 200) {  
            // this.setState(initialCarrerControl);
            this.myFormRef.reset();


              alert('Carrer Document Is Stored')
        }
          else {
          const data = res.json();
          return Promise.all([statusCode, data]);
          }
        }
        ).then(data => {
         if  (data==null)
         {
          console.log(data)

         } else {
          console.log(data)

          if(data[0] === 400){

            alert(data[1].details)
          } else {
            alert(data)
          }
    }
}
);
    
    }

    render() { 
        return ( 
            <div>
                <Nav/>
                <div className="admin">
                <img src = "/images/banner.png" alt = "img not found"/>
                <div className="admincontainer">
                 <h1>Admin Job Portal</h1>
                 <form ref={(el) => this.myFormRef = el} onSubmit = {this.handlesubmit}>
                     <p>Location :</p>
                     <input type="text" name="location" onChange={this.handlelocation } required />
                     <p>Joining Date :</p>
                     <input type="date" name="joiningdate" onChange={this.handlejoiningDate }  required />
                     <p>Job Role :</p>
                     <input type="text" name="jobrole" onChange={this.handlejobRole }  required/>
                     <p>Salary Range :</p>
                     <input type="text" name="salaryrange" onChange={this.handlesalaryRange }  required/>
                     <p>Description :</p>
                     <textarea name="description" id="" cols="10" rows="3" onChange={this.handledescription }  required></textarea>
                     <button type="submit"> Submit</button>
                     </form>
                 
                 </div>


                </div>

             
            </div>
         );
    }
}
 
export default CarrerControl;