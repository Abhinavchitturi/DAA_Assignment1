import React from "react";
import ReactDOM from "react-dom/client"; // Fixed incorrect import
import { BrowserRouter } from "react-router-dom"; // Added BrowserRouter for routing fix
import App from "./App";
import "katex/dist/katex.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/DAA_Assignment1"> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
