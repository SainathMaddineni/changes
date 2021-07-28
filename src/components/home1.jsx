import React, { Component } from 'react';
import './home1.css';
import Nav from "./newnav"
class Home1 extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Nav/>
                <div className="home1container">
                    

                    <div className="home1box1">
                        <div className="home1para1">
                            <div className="home1heading"><h1>Predict The Future With Innovation Technilogies</h1></div>

                            <div className="home1para"><p><i>Software Innovation Like Almost Every Other Kind Of Innovation, Requires The  Ability Collaboration And Share Ideas With Other People, And To Sit Down And Talk With Customer And Get Their Feedback And Understand Needs.</i></p></div>
                        </div>
                       
                    </div>

                    <div className="home1box2">
                        <div className="home1content1">
                            <div className="home1vissionimg">
                                
                            </div>
                            <div className="home1visionpara">
                                <div className="visionheading">
                                    <h1 className="visionheadingbox">VISION</h1>
                                    <p className="visionheadingpara">We Are Passionate In Healping Businesses Through Innovative Technologies To Reach And Maximize Their Business Dreams We Strive To Become A Global Software And <span>Web-Development Company.</span></p>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="home1box3">
                        <div className="home1content2">
                            
                            <div className="home1missionpara">
                                <div className="missionheading">
                                    <h1 className="missionheadingbox">MISSION</h1>
                                    <p className="missionheadingpara">It Is Through Our Passion And Commitment To Our Clients What We Develope Software To Face Real World Challanges. It Is For Our Love And Dedication To What We Do That Enable Us To become A Better Company For Ourselves, For Clients, Our Community And The World. </p>
                                </div>
                        
                            </div>
                             <div className="home1missionimg">
                                
                             </div>
                        </div>
                        

                    </div>
                    <div className="home1client">Our Clients</div>

                    <div className="home1box4">
                     
                       <div className="fling-minislide">

                        <img src="/images/homelogo1.jpg" alt="Slide 4" />
                        <img src="/images/homelogo3.jpg" alt="Slide 3" />
                        <img src="/images/homelogo6.jpg" alt="Slide 2" />
                        <img src="/images/homelogo1.jpg" alt="Slide 1" /> 

                      </div>
                      <div className="fling-minislide">

                        <img src="/images/homelogo3.jpg" alt="Slide 4" />
                        <img src="/images/homelogo6.jpg" alt="Slide 3" />
                        <img src="/images/homelogo1.jpg" alt="Slide 2" />
                        <img src="/images/homelogo3.jpg" alt="Slide 1" /> 

                      </div>
                      <div className="fling-minislide">

                        <img src="/images/homelogo6.jpg" alt="Slide 4" />
                        <img src="/images/homelogo1.jpg" alt="Slide 3" />
                        <img src="/images/homelogo3.jpg" alt="Slide 2" />
                        <img src="/images/homelogo6.jpg" alt="Slide 1" /> 

                      </div>
                      
                     



                    </div>




                </div>
     


            </div>
          );
    }
}
 
export default Home1;