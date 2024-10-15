import React from "react";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App container">
      <header>
        {" "}
        <h1> English Dictionary </h1>{" "}
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Tamara Hrybulia and is{" "}
        <a
          href="https://github.com/TamaraHrybulia/my-dictionary"
          target="_blank"
          rel="norefferer"
        >
          {" "}
          open-sourced on Github{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/TamaraHrybulia/my-dictionary"
          target="_blank"
          rel="norefferer"
        >
          hosted on Netlify{" "}
        </a>
      </footer>
    </div>
  );
}
