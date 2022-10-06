import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainBlog({img,heading,content,link}) {

  return (
    <>
        <section className="first-blog">
       <div className="container">
            <div className="border-radious">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="blog-image-wrapper">
                            <NavLink to="/">
                                <img src={img} alt={heading}/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="blog-content">
                            <div>
                                <h2>{heading}</h2>   
                                <p>{content}</p>
                                <NavLink to={link}>Continue reading...</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>     
   </section>
    </>
  )
}
