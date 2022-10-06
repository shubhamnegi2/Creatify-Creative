import React from 'react'

export default function ContactForm() {
  return (
    <>
         <section className="contact-form-wrapper">
        <div className="container">
            <div className="contact-form">
                <div className="row">
                    <div className="col-lg-4 g-0">
                        <div className="contact-left-section">
                            <h2>contact</h2>
                            <div className="contact-infos">
                                <ul>
                                    <li><a href=""><i className="fa-solid fa-phone"></i>+91-9879357255</a></li>
                                    <li><a href=""><i className="fa-solid fa-paper-plane"></i>hello@zerodesigns.in</a></li>
                                    <li><a href=""><i className="fa-brands fa-skype"></i>zero designs</a></li>
                                </ul>
                            </div>
                            <div className="social-media-links">
                                <ul>
                                    <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>         
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 g-0">
                        <form action="" className="contact-us-form ml-5">
                            <div className="row">
                                <div className="col-10">
                                    <h2>Get in touch</h2>
                                    <p>Have an inquiry or some feedback for us? <br/>
                                        Fill out the form below to contact our team.</p>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="fname" name="fname" placeholder="Your First Name" />
                                    <p className="error fname-error">error</p>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="lname" name="lname" placeholder="Your Last Name"/>
                                    <p className="error lname-error">error</p>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="email" name="email" placeholder="Your Email"/>
                                    <p className="error email-error">error</p>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" id="phone" name="phone" placeholder="Your Phone"/>
                                    <p className="error email-error">error</p>
                                </div>
                                <div className="col-md-12">
                                    <textarea name="message" id="message"  placeholder="Message"></textarea>
                                    <p className="error message-error">error</p>
                                </div>
                                <div className="col-10">
                                    <div className="submit-button">
                                        <button type="submit">Send message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
