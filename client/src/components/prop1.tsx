import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// Import our custom CSS
import '../scss/slidestyle.scss'

import "bootstrap/dist/css/bootstrap.css";

import Slideshow from "./Slideshow";

const images = [
  {
    
    src: "https://th.bing.com/th?id=OIP.7pvpLzOF0Lx-p4g1T_HdmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    alt: "Image 1",
  },
  {
    src: "https://th.bing.com/th/id/OIP.OSa9J2kCQtP7_19e5t0cMQHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7",
    alt: "Image 2",
  },
  {
    src: "https://th.bing.com/th/id/OIP.sFZOSrE3WnGHoTFqU3_CzQHaEc?w=279&h=180&c=7&r=0&o=5&pid=1.7",
    alt: "Image 3",
  },
  {
    src: "https://th.bing.com/th/id/OIP.7rThBT7sXI4TFqHO7YVEdQHaEK?w=333&h=187&c=7&r=0&o=5&pid=1.7",
    alt: "Image 4",
  },
  {
    src: "https://cdn.discordapp.com/attachments/1102050019256827927/1102055727201267742/w1024.jpg",
    alt: "Image 5",
  },
];

export default function Prop1() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Property 1 </title>
      </head>
      <body>
        <div className="intro">
          <h1>The Columns</h1>
          <h5>1234 hapy town ridge, Lawrenceville Ga</h5>
          <h5>3 bedrooms|2.5 baths|Condo for Sale</h5>
          <h4>$650,000</h4>
          <div className="lefty">
            <button>453-654-7890</button>
            <br></br>
            <button>Request Tour</button>
          </div>
        </div>
      
     
          <div className="picturess">
          <Slideshow images={images} />
          </div>
          <br></br>

          {/* <div className="intro">
            <h1>Amenties</h1>
          <div className="info">
            <ul>
              <li>Balcony</li>
              <li>Patio</li>
              <li>Stainless Steel Appliances</li>
              <li>Waher & Dryer In Unit</li>
            </ul>
            
            </div>          
          
            </div>    */}
            <div className="jumbotron">
          <h1 className="display-4">Amenities</h1>
            <ul className="info">
            
              <li>Balcony</li>
              <li>Patio</li>
              <li>Stainless Steel Appliances</li>
              <li>Washer & Dryer In Unit</li>
            
            </ul>
          <hr className="my-4"></hr>
          <h1 className="display-4">Amenities</h1>
            <ul className="info">
            
              <li>Balcony</li>
              <li>Patio</li>
              <li>Stainless Steel Appliances</li>
              <li>Washer & Dryer In Unit</li>
            
            </ul>
          <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
</div>       
          
       
        
      </body>
    </html>
  );
}


