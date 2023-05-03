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
    
    src: "https://photos.zillowstatic.com/fp/861e615fecbec3498676ae41e5ea0f58-uncropped_scaled_within_1344_1008.webp",
    alt: "Image 1",
  },
  {
    src: "https://photos.zillowstatic.com/fp/b8eb7373b93bf9b81fe87a2c2f409099-uncropped_scaled_within_1344_1008.webp",
    alt: "Image 2",
  },
  {
    src: "https://photos.zillowstatic.com/fp/887ef5577ffcae94619c86193e5b6447-cc_ft_384.webp",
    alt: "Image 3",
  },
  {
    src: "https://photos.zillowstatic.com/fp/9f60418383866321ed1f9edce080d77c-cc_ft_576.webp",
    alt: "Image 4",
  },
  {
    src: "https://cdn.discordapp.com/attachments/1102050019256827927/1102054282024460379/OIP_2.jpg",
    alt: "Image 5",
  },
];

export default function Prop2() {
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
          <h1>The Austin</h1>
          <h5>123 Pendleton rd, Atlanta Ga</h5>
          <h5>3 bedrooms|2.5 baths|Condo for Sale</h5>
          <h4>$650,000</h4>
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
            
              <li>Built in 2016</li>
              <li>1000sqft</li>
              <li>Walking distance from Georgia Aquarium</li>
              <li><b>Parking:</b> 2 spaces</li>
              <li><b>Parking Features:</b> Garage inside apartment complex </li>
              <li><b>Flooring:</b> Hardwood</li>
              <li><b>Heating Features:</b> Forced Air</li>
              <li><b>Cooling:</b> Ceiling Fan, Central</li>
            
            </ul>
          <hr className="my-4"></hr>
          <h1 className="display-4">Amenities</h1>
            <ul className="info">
            
              <li>Balcony</li>
              <li>No Patio</li>
              <li>Stainless Steel Appliances</li>
              <li>Washer & Dryer In Unit</li>
              <li>Fireplace</li>
              <li>No Garden</li>
            
            </ul>
            <hr className="my-4"></hr>
          <h1 className="display-4">Schools</h1>
            <ul className="info">
            
              <li><b>Marco Polo Elementary School</b><br></br>
              Grades: PK-5 Distance: 0.9 mi</li>
              <li><b>Happy Middle School</b><br></br>
              Grades: 6-8 Distance: 2.2 mi</li>
              <li><b>Warriors High School</b><br></br>
              Grades: 9-12 Distance: 0.2 mi</li>
            
            </ul>
            <hr className="my-4"></hr>
            {/* Property Tax Value */}
          <h1 className="display-4">Tax History</h1>
          <table className="info">
                <tr>
                  <th> Year </th>
                  <th> Property Taxes </th>
                  <th> Tax Assessment </th>
                </tr>
                <tr>
                  <td> 2020 </td>
                  <td> $1,500 <span className= "neg">-12.6% </span> </td>
                  <td> $110,780 <span className="pos">+3% </span> </td>
                </tr>
                <tr>
                  <td> 2021 </td>
                  <td> $1,200 <span className="neg">-10% </span> </td>
                  <td> $120,000 <span className="pos">+27.3% </span> </td>
                </tr>
                <tr>
                  <td> 2022 </td>
                  <td> $2,120 <span className="pos">+5.3% </span> </td>
                  <td> $90,000 <span className="pos">+12% </span> </td>
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
