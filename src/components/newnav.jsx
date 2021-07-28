import React, { Component } from 'react';
import './newnav.css';
import { FiAlignJustify } from 'react-icons/fi';

class Nav extends Component {

    state = {  }

    render() { 
        return ( 
            <div className="navbar">
                <header>
                   <figure className="brand"> <a href="/"  className="nav-com">Slope Rate Techno Private Limited</a> </figure>
               <nav className="menu">
            <input type="checkbox" id="menuToggle"/>
            <label htmlFor="menuToggle" className="menu-icon"><i><FiAlignJustify/></i></label>
            <ul>
                <a href="/"><li>HOME</li></a>
                <a href="/services"><li>SERVICES</li></a>
                <a href="/aboutus"><li>ABOUTUS</li></a>
                <a href="/contactus"><li>CONTACTUS</li></a>
                <a href="/login"><li>LOGIN</li></a>
                <a href="/signup"><li>SIGNUP</li></a>
                <a href="/jobs"><li>JOBS</li></a>
            </ul>
        </nav>
     </header>
            </div>
         );
    }
}
 
export default Nav;