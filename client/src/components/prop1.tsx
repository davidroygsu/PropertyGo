import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// Import our custom CSS
import '../scss/slidestyle.scss'

import "bootstrap/dist/css/bootstrap.css";

import Slideshow from "./Slideshow";
///Place images
const images = [
  {
    
    src: "https://photos.zillowstatic.com/fp/94ae283878b966fb51a4a87d1b29bf6b-uncropped_scaled_within_1344_1008.webp",
    alt: "Image 1",
  },
  {
    src: "https://photos.zillowstatic.com/fp/b932b9c56c4b4b9258fbe5687310a66e-uncropped_scaled_within_1344_1008.webp",
    alt: "Image 2",
  },
  {
    src: "https://photos.zillowstatic.com/fp/209a67c4abf035e85f13e371bba5314f-cc_ft_384.webp",
    alt: "Image 3",
  },
  {
    src: "https://photos.zillowstatic.com/fp/aed8728f40b024d99e9921d90633baaa-cc_ft_384.webp",
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
        {/* add heading */}
        <div className="intro">
          <h1>The Columns</h1>
          <h5>1234 hapy town ridge, Lawrenceville Ga</h5>
          <h5>4 bedrooms|2 baths|Condo for rent</h5>
          <h4>$5,000</h4>
          <div className="lefty">
            <button>453-654-7890</button>
            <br></br>
            <button>Request Tour</button>
          </div>
        </div>
        
      
     {/* Don't change */}
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
          <h1 className="display-4">About</h1>
            <ul className="info">
            
              <li>Built in 2019</li>
              <li>2200sqft</li>
              <li>Walking distance from Coca Cola World</li>
              <li><b>Parking:</b> 2 spaces</li>
              <li><b>Parking Features:</b> Garage Detached, Off Street, On Street</li>
              <li><b>Flooring:</b> Hardwood</li>
              <li><b>Heating Feautures:</b> Forced Air</li>
              <li><b>Cooling:</b> Ceiling Fan, Central</li>
            
            </ul>
          <hr className="my-4"></hr>
          <h1 className="display-4">Amenities</h1>
            <ul className="info">
            
              <li>Balcony</li>
              <li>Patio</li>
              <li>Stainless Steel Appliances</li>
              <li>Washer & Dryer In Unit</li>
              <li>Fireplace</li>
              <li>Garden</li>
            
            </ul>
            <hr className="my-4"></hr>
          <h1 className="display-4">Schools</h1>
            <ul className="info">
            
              <li><b>Hope Hill Elementary School</b><br></br>
              Grades: PK-5 Distance: 0.6 mi</li>
              <li><b>Inman Middle School</b><br></br>
              Grades: 6-8 Distance: 1.2 mi</li>
              <li><b>Midtown High School</b><br></br>
              Grades: 9-12 Distance: 1.2 mi</li>
            
            </ul>
            <hr className="my-4"></hr>
            {/* Property Tax Value */}
          <h1 className="display-4">Tax History</h1>
          <table className="info">
                <tr>
                  <th>Year</th>
                  <th>Property Taxes</th>
                  <th>Tax Assessment</th>
                </tr>
                <tr>
                  <td>2022</td>
                  <td>$350 +7.0%</td>
                  <td>$4,678 +10.0%</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>$400 -3.5%</td>
                  <td>$6,200 +5.0%</td>
                </tr>
              </table>
          <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
</div>       
          
       
        
      </body>
    </html>
  );
}
