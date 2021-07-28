import React, { Component } from 'react';
import './jobspage.css';
import Nav from "./newnav";

class JOBS extends Component {
    state = {  }
    render() { 
        return (
            <div>
                 <Nav/>
                <div className = "jobs">
<div className ="s">
<h1>FIND YOUR DREAM JOB</h1>
</div>
<h1 align="center">CAREER</h1>
<div className="jobs-flex-container">
  <div className="jobs-flex-item-left">
  <img src="/images/c.png" alt="Girl "/>
  <h4>C DEVELOPER</h4>
  <button  className ="jobs-button"><a href="#popup">Click me</a></button>
	</div>
  <div className ="jobs-flex-item-right">
  <img src="/images/sq1.png" alt="Girl "/>
  <h4>DB DEVELOPER</h4>
  <button  className ="jobs-button"><a href="#popup">Click me</a></button>
  </div>
</div>
</div>
<div className ="jobs-flex-container">
  <div className ="jobs-flex-item-left">
  <img src="/images/ra.png" alt="Girl "/>
  <h4>REACT DEVELOPER</h4>
  <button  className ="jobs-button"><a href="#popup">Click me</a></button>
	</div>
  <div className ="jobs-flex-item-right">
  <img src="/images/ann.png" alt="Girl "/>
  <h4>ANDROID DEVELOPER</h4>
  <button   className ="jobs-button"><a href="#popup">Click me</a></button>
  </div>
</div>
<div className ="jobs-flex-container">
  <div className ="jobs-flex-item-left">
  <img src="/images/p1.png" alt="Girl "/>
  <h4>PYTHON DEVELOPER</h4>
  <button  className ="jobs-button"><a href="#popup">Click me</a></button>
	</div>
  <div className ="jobs-flex-item-right">
  <img src="/images/p2.png" alt="Girl "/>
  <h4>PHP DEVELOPER</h4>
  <button   className ="jobs-button"><a href="#popup">Click me</a></button>
  </div>
</div><div className ="jobs-flex-container">
  <div className ="jobs-flex-item-left">
  <img src="/images/j1.png" alt="Girl "/>
  <h4>JAVA DEVELOPER</h4>
  <button  className ="jobs-button"><a href="#popup">Click me</a></button>
	</div>
  <div className ="jobs-flex-item-right">
  <img src="/images/ra.png" alt="Girl "/>
  <h4>REACT DEVELOPER</h4>
  <button   className ="jobs-button"><a href="#popup">Click me</a></button>
  </div>
</div>
<div id="popup" className="overlay">
                                <div className="popup">
                                    <h2 align="center">DEVELOPER</h2><hr color="black"></hr>
                                    <a className="close" href="/jobs">&times;</a>
                                    <div className="content">
                                        JOB ROLE:
                                        <div className="content">SALARY RANGE:</div>
                                       <div className="content">LOCATION:</div>
                                       <div className="content">JOINING DATE:</div>
                                       <div className="content">DESCRIPTION:</div>
                                    </div>
                                    <button type="jobs-button"className="d">APPLY</button>
                                </div>
                            </div>
            </div>
          );
    }
}
 
export default JOBS;