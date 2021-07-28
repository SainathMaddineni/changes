import React, { Component } from 'react';
import Nav from './newnav';
import './newServices.css';

class NewServices extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Nav/>
            <div className = "Main">
                <div className = "main-Container">
                <div className ="words word-1">
                    <span>O</span>
                    <span>U</span>
                    <span>R</span>
                    </div>
                    <div className="words word-2">
                    <span>I</span>
                    <span>T</span>
                    </div>
                    <div className="words word-3">
                    <span>S</span>
                    <span>E</span>
                    <span>R</span>
                    <span>V</span>
                    <span>I</span>
                    <span>C</span>
                    <span>E</span>
                    <span>S</span>
                    </div> 
                    <div>
                    <a href="/services" className="item scaling">Explore More</a>
                    </div>
                    <div className = "main-image">
                        <img src = "\images\servicimg.jpg" alt = "img not found"/>
                    </div>
                    </div>
                    <div className = "colum">
                        <div className = "content-box">
                            <h1>Mobile technology has phenomenally changed the way people communicate.</h1>
                            <img src = "\images\serv-sec.jpg"  alt = "img not found"/>
                            <p>As a Java development company, we have expertise in various Java technologies such as J2SE, J2EE, J2ME, JavaFX and database technologies like Oracle and MySQL. Our dedicated Java developers convert clients’ ideas and objectives into applications by offering exceptional Java / J2EE Application Development services that meets their expectation. SLOPE RATE strictly adheres to standards and processes defined by SEI under CMMi Maturity Level 3 which ensures the client avails the best quality applications within their time and budget and is one of the top Node.js development company which looks after the growth architecture and boosts productivity for enhancing your business sustenance. Our team consists of professional Node.js developers who provide the best solutions and consulting services to navigate your business insights and with the help of friendly features of Node.js development and strong technical skills of our professionals, we provide robust and expertise solution to commend different business challenges by creating a state of the art solution as per your demands. </p>
                                <a href="/services" className="item1 smoothXY">Explore Me</a>
                        </div>
                    </div>
                    <div className = "services-content">
                        <h1>OUR SERVICES</h1>
                        <p> Having hands-on experience in a wide range of tools and technologies, we develop customized Android Apps  and WEB apps which are powerful and scalable for any android device.</p>
                        <div className = "flex-container">
                        <div><img src = "/images/client-1.jpg"  alt = "img not found"/></div>
                        <div><img src = "\images\contentimg-2.jpg"  alt = "img not found"/></div>
                        <div><img src = "\images\contentimg-3.jpg"  alt = "img not found"/></div> 
                        </div>
                        <div className = "flex-container2">
                        <div><h1>WEB DEVELOPMENT</h1>
                        <p>The design of the website should be simple to navigate and the items of the menu should be accessed merely from any page.

                            All the viewers should know where they are precisely and have easy access to where they want to be. A sitemap is an excellent idea and should be used if it is available.</p>
                        </div>
                        <div><h1>MOBILE DEVELOPMENT</h1>
                        <p>SLOPE RATE is one of the prominent Android and IOS app development company that offers professional Android App development services. We have an expert team of Android Developers, possessing up-to-date knowledge of latest releases and trends, which help us in delivering world-class apps. With our in-depth research and analysis, we consult and develop apps to meet clients’ business requirements and expectations. Having hands-on experience in a wide range of tools and technologies.</p>
                        </div>
                        <div><h1>A.I</h1>
                        <p>Transforming business processes by building AI applications with AI development capabilities. We convert your AI Vision into a reality by applying our intelligence and experience in Computer Vision, Deep Learning, Machine Learning and Natural Language Processing.</p>
                        </div> 
                        </div>
                    </div>
                    <div className = "colum">
                        <div className = "content-box1">
                            <h1> Improves the consumer experience and service standards, and all increase revenues.</h1>
                            <div><h5> It has opened up new avenues for every organization to reach and connect with their target customers</h5></div>
                            <div><h5>Android devices are the most popular and used by more than half of the populace in the world</h5></div>
                            <div><h5> Regular and frequent upgrades in OS and UI, flexibility</h5></div>
                            <img src = "\images\serv-sec.jpg"  alt = "img not found"/>
                        </div>
                    </div>
                    <div className = "our-clients">
                        <h1>OUR CLIENTS</h1>
                        <div className = "clint-container2">
                            <div className = "clients">
                            <a href="http://www.coderepoz.com/index.html#home">
                                <img src = "/images/homelogo1.jpg" alt = "img not found"/> 
                                </a>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur numquam nesciunt nihil voluptate fuga necessitatibus. Voluptatibus placeat ad architecto impedit exercitationem veniam soluta similique, culpa repellendus aspernatur maxime iure at corporis ea animi? Dicta deserunt suscipit vitae possimus quasi excepturi incidunt non? Quae iure eius omnis rerum voluptas magni.</p> */}
                                {/* <a href="/services" className="item2 swipeX">Exlore Me</a> */}
                            </div>
                            <div className = "clients">
                            <a href="https://www.confluxsystems.com/">
                                <img src = "/images/homelogo6.jpg" alt = "img not found"/>
                                </a>
                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima consequuntur numquam nesciunt nihil voluptate fuga necessitatibus. Voluptatibus placeat ad architecto impedit exercitationem veniam soluta similique, culpa repellendus aspernatur maxime iure at corporis ea animi? Dicta deserunt suscipit vitae possimus quasi excepturi incidunt non? Quae iure eius omnis rerum voluptas magni.</p> */}
                                {/* <a href="/services" className="item2 swipeX">Exlore Me</a> */}
                            </div>
                            <div className = "clients">
                                <a href="http://www.sridhaedu.com/landing.php?action=please_login">
                                <img src = "/images/homelogo3.jpg" alt = "img not found"/>
                                </a>
                                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, laboriosam ipsam? Delectus accusantium maxime est mollitia et pariatur beatae. Fuga nobis, quaerat hic ipsum praesentium animi tempora, aperiam recusandae consequuntur, in necessitatibus illum quos cupiditate fugiat. Ducimus, doloremque minus maxime laborum debitis amet eveniet, impedit, expedita veritatis magni atque placeat.</p> */}
                                {/* <a href="/services" className="item2 swipeX">Exlore Me</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
         );
    }
}
 
export default NewServices;