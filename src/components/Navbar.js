import React from "react";

export default function Navbar(props) {

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>{props.title}</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                {props.aboutText}
              </a>
              <a className="nav-link" href="About.js">
                About
              </a>
              {/* <a className="nav-link" href="/">
                Contacts
              </a> */}
            </div>
            
          </div>
          
        </div>
      </nav>
    </div>
  );
}
