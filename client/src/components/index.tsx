import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// Import our custom CSS
import '../scss/styles.scss'


export default function Index() {
  return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>PropertyGo</title>
        </head>
        <body>
          <div className="jumbotron text-center blur">
            <h1 className="display-4">PropertyGo</h1>
            <p className="lead">The go-to site for finding properties</p>
            <a
              href="/buyerregister"
              className="btn btn-primary btn-lg active rounded-2 buyerbutton"
              role="button"
              aria-pressed="true"
            >
              Register/log-in as a buyer
            </a>
            <a
              href="/sellerregister"
              className="btn btn-secondary btn-lg active rounded-2 sellerbutton"
              role="button"
              aria-pressed="true"
            >
              Register/log-in as a seller
            </a>
            <div className='homeMsg'>
            <h1>About Us</h1>
            <p>Here at PropertyGo, our site offers a registration and login for potential
              buyers and sellers to make interactions. For buyers, they can view property cards
              where they can view details about seller's properties using a filter system and search bar
            </p>

            <h1>Why us? </h1>
            <p>
              PropertyGo is better than the competitors because it features a simple
              user interface with a quick responsive website. 
            </p>

            <h1>Who Works Here?</h1>
            <p>
              David Roy, Humayra Hussain, Jennifer Amachree and Raymond Hernandez.
            </p>
            </div>

          </div>

          
          <script type="module" src="./js/main.js"></script>
        </body>
      </html>
  );
}
