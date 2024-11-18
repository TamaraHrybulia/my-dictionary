import React from "react";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./pensil2.png";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="dictionary-app">
          <header>
            {" "}
            <h1> English Dictionary</h1>
            <img src={logo} className="logo" alt="cartoon pencil" />
          </header>
          <main>
            <Dictionary defaultWord="autumn" />
          </main>
          <footer>
            Coded by Tamara Hrybulia and is{" "}
            <a
              href="https://github.com/TamaraHrybulia/my-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on Github{" "}
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/TamaraHrybulia/my-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify{" "}
            </a>
            <br />
            Photos provided by{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Pexels
            </a>{" "}
            and icons are provided by{" "}
            <a href="https://www.freeflagicons.com/">Freeflagicons</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
