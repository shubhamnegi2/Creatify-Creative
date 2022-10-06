import React from "react";
import FirstCommonSection from "./components/FirstCommonSection";
import MainBlog from "./components/MainBlog";
import AllBlogs from "./components/AllBlogs";
import "./css/blog.css";

const data = {
  h1: "We Are Creative",
  h2: "an award-winning branding agency with a global outlook",
  p: " We are a brand development agency with a collective experience of more than 20 years. Our corporate office is in Ahmedabad, india, from where we also align with professionals located across the globe, to deliver 360 degree, end-to-end solutions.",
  img: ["./images/5.jpg", "./images/4.jpg", "./images/3.jpg", "./images/2.jpg"],
};

const FirstBlog = {
  img: "./images/blog0.webp",
  heading: "Why Search Engine Optimization is Important For Your Branding ?",
  content:
    "Search engine optimization (SEO) is Most important factor for your Business Online Web Presence and Success, particularly when Your Brand is not noticed by any one. Without Seo, there are several ways to promote your Business but they are costlie...",
  link: "/",
};

const allBlogs = [
  {
    img: "images/blog1.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },

  {
    img: "images/blog0.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },

  {
    img: "images/blog2.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },

  {
    img: "images/blog3.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },

  {
    img: "images/blog0.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },

  {
    img: "images/blog1.webp",
    heading: "Important Mobile Interface Design Guidelines by Zero Designs",
    content:
      "Mobile interface Design is the part of User Interface Design. As we have discussed earlier, User Interface design is made to reduce the work pressure of the user and make its work more easy and systematic. In the same mann...",
    path: "/",
  },
];
export default function Blog() {
  return (
    <>
      <FirstCommonSection data={data} />
      <MainBlog
        img={FirstBlog.img}
        heading={FirstBlog.heading}
        content={FirstBlog.content}
        link={FirstBlog.link}
      />
      <div className="all-blogs">
        <div className="container">
          <div className="row">
            {
                allBlogs.map((elem,i)=>
                    <AllBlogs img={elem.img} heading={elem.heading} content={elem.content} path={elem.path}/>
                )
            }
          </div>
        </div>
      </div>
    </>
  );
}
