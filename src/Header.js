import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
     
  return (
    <div className="navigation-bar"> 
    <div className="container"> 
        <div className="row justify-content-between align-items-center">

            <div className="col-lg-2">
                <div className="logo">
                <NavLink  to='/'>
                    <img src="./images/logo.png" alt=""/>
                </NavLink>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="navigation-links">
                    <ul className="d-flex justify-content-between">
                        <li> <NavLink exact to='/'  className="active-nav" href="index.html">Home</NavLink></li>

                        <li> <NavLink exact to='/about-us'> About </NavLink> </li>
                        <li className="header-services-link"> <NavLink exact to='/services' >services </NavLink> 

                            <ul className="services-dropdown">
                                <li> <NavLink exact to='./'   >service1 </NavLink> </li>
                                <li> <NavLink exact to='/'   >service2  </NavLink>  </li>
                                <li> <NavLink exact to='/'   >service3  </NavLink>  </li>
                                <li> <NavLink exact to='/'   >service4  </NavLink>  </li>
                            </ul>
                        </li>

                        <li> <NavLink exact to='/'   >portfolio  </NavLink>  </li>
                        <li> <NavLink exact to='/blog'  href="blog.html">blog  </NavLink>  </li>
                        <li> <NavLink exact to='/contact-us'  href="contact-us.html">Contact  </NavLink>  </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="social-media-icons">
      <ul>
        <li> <NavLink exact to='/'   ><i className="fa-brands fa-facebook-f"></i>Facebook  </NavLink>  </li>
        <li> <NavLink exact to='/'   ><i className="fa-brands fa-instagram"></i>Instagram  </NavLink>  </li>
        <li> <NavLink exact to='/'   ><i className="fa-brands fa-linkedin-in"></i>Linkedin  </NavLink>  </li>
        <li> <NavLink exact to='/'   ><i className="fa-brands fa-twitter"></i>Twitter  </NavLink>  </li>
      </ul>
    </div>
</div>
  )
}
