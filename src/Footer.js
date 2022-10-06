import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <h2>Ready to Give Us a Try?</h2>
        <div className="row bb">
          <div className="col-lg-2">
            <div className="logo">
              <img src="./images/logo.png" alt="logo" />
            </div>
          </div>
          <div className="col-lg-2 offset-1">
            <div className="footer-links">
              <h3>SITE MAP</h3>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about-us'>About</NavLink></li>
                <li><NavLink to='/services' href="">services</NavLink></li>
                <li><NavLink to='/' href="">portfolio</NavLink></li>
                <li><NavLink to='/blog' href="">blog</NavLink></li>
                <li><NavLink to='/contact-us' href="">contact</NavLink></li>
              </ul>
            
            </div>
          </div>
          <div className="col-lg-3">
            <div className="social-media-links">
              <h3>SOCIAL MEDIA</h3>
              <ul>
                <li><a href="">facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Linkdin</a></li>
                <li><a href="">Youtube</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="adress">
              <h3>CORPORATE OFFICE</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>36A, Industrial Area
                  Site-IV <br />
                  Sahibabad, Ghaziabad <br />
                  Uttar Pradesh - 201010
                </li>
                <li><i className="fas fa-phone-alt"></i>+91 8800865486</li>
                <li>
                  <i className="far fa-envelope"></i>info.creatifycreative@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright">© 2022 Creatify Creative. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
