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
    
    src: "https://photos.zillowstatic.com/fp/026c922aaced90acd209f316997d4e01-cc_ft_384.webp",
    alt: "Image 1",
  },
  {
    src: "https://photos.zillowstatic.com/fp/78fed2cf5691353b0f7b9bcaad4c4f82-cc_ft_384.webp",
    alt: "Image 2",
  },
  {
    src: "https://photos.zillowstatic.com/fp/31daa4ffed8bee3aafd92e6a8b4aebb3-cc_ft_768.webp",
    alt: "Image 3",
  },
  {
    src: "https://photos.zillowstatic.com/fp/5ff55205695e67e9d1294a40bb365b60-cc_ft_384.webp",
    alt: "Image 4",
  },
  {
    src: "https://cdn.discordapp.com/attachments/1102050019256827927/1102057674360758472/R_3.png",
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
          <h1>Pines Gables</h1>
          <h5>567 Marco Not Polo, Dunwoody Ga</h5>
          <h5>3 bedrooms|2.5 baths|Apartment for rent</h5>
          <h4>$2,000</h4>
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
            
              <li>Built in 2010</li>
              <li>2256sqft</li>
              <li>Walking distance from the park</li>
              <li><b>Parking:</b> 2 spaces</li>
              <li><b>Parking Features:</b> On Street</li>
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
            
              <li><b>Everglades Elementary School</b><br></br>
              Grades: PK-5 Distance: 0.3 mi</li>
              <li><b>Everglades Middle School</b><br></br>
              Grades: 6-8 Distance: 0.2 mi</li>
              <li><b>Glades High School</b><br></br>
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
                  <td>$150 +7.0%</td>
                  <td>$2,678 +1.0%</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>$300 -3.5%</td>
                  <td>$3,200 +5.0%</td>
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
