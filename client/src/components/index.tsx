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
          <title>Wi-Fi Angel</title>
        </head>
        <body>
          <div className="jumbotron text-center blur">
            <h1 className="display-4">Wi-Fi Angel</h1>
            <p className="lead">A new way to share Wi-Fi</p>
            <a
              href="buyerregister.html"
              className="btn btn-primary btn-lg active rounded-2 buyerbutton"
              role="button"
              aria-pressed="true"
            >
              Register/log-in as a buyer
            </a>
            <a
              href="sellerregister.html"
              className="btn btn-secondary btn-lg active rounded-2 sellerbutton"
              role="button"
              aria-pressed="true"
            >
              Register/log-in as a seller
            </a>
          </div>
          <script type="module" src="./js/main.js"></script>
        </body>
      </html>
  );
}
