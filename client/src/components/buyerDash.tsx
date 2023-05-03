import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// Import our custom CSS
import '../buyerDash.css'


export default function BuyerDash() {
  function uponLoad(){ //this function takes care of other functions that will be called 
    //below is a function call to welcome() which keeps track of the # of times a user has logged in. if login <= 1 they receive a "welcome" note for choosing our company!
    welcome();
    //below is a function call to a method that will take control of the "search" portion 
  
    //below is a function call to a method that will add the houses to a wishlist
    wishlist();
  }

  function welcome(){
    //if(login <= 1){ //will use some sort of sessions variable to keep track of the # of times the user has logged in. 
    //  alert("Thank you for choosing PropertyGo for all of your property buying needs! Feel free to look around and explore what we can offer for special one-in-a-million users like you!");
    //}
  }

  function wishlist() {
    var wish = new Array(3);
    let home = document.getElementsByClassName("heart");

  }
  
  return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title> Buyer Dashboard </title>
        </head>
        <body onLoad={uponLoad} >

          <div className="fyorm">
            <form id="searchProp">
              <label htmlFor="search"> Enter Search </label>
              <input type="text" id="search" name="search" /> 
              <button type="submit"> Search </button>
            </form>
          </div>

        <div className="cardz">
          <div className="propCard">
            <img src="./src/assets/condo1.jpg" alt="condo" width="100%" height="170px"></img>
            <div className="container">
              <h4><b> $650,000 </b></h4> 
              <p> 3 bds&nbsp;| 2 ba |&nbsp;Condo for sale </p>
              <p> <a href="/prop1"> The Columns </a> </p>
              <p> 1234 happy town ridge, Lawrenceville, GA </p>
              <div className="heart_btn"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" fill-opacity="0.5" className="heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              </div>
            </div>
          </div>


          <div className="propCard">
            <img src="./src/assets/condo2.jpg" alt="condo" width="100%" height="170px"></img>
            <div className="container">
              <h4><b> $5,000 </b></h4> 
              <p> 4 bds&nbsp;| 2 ba |&nbsp;Condo for rent </p>
              <p> <a href="/prop2"> The Austin </a>  </p>
              <p> 123 Pendleton rd, Atlanta, GA </p>
              <div className="heart_btn"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" fill-opacity="0.5" className="heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              </div>
            </div>
          </div>

            
          <div className="propCard">
            <img src="./src/assets/apt1.jpg" alt="apt" width="100%" height="170px"></img>
            <div className="container">
              <h4><b> $2,000 </b></h4> 
              <p> 3 bds&nbsp;| 2.5 ba |&nbsp;Apt for rent </p>
              <p> <a href="/prop3"> Pines Gables </a></p>
              <p> 567 Marco Not Polo, Dunwoody GA </p>
              <div className="heart_btn"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" fill-opacity="0.5" className="heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
              </div>
            </div>
          </div>
        </div> 
        <br></br>
        <br></br>
        <br></br>
        <div className="wishlist">
        <h2> Wishlist </h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d87093" fill-opacity="0.5" className="heart" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        </div>
        

          <script type="" src=""></script>
        </body>
      </html>
  );
}
