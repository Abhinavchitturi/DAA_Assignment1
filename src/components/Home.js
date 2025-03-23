import React from "react";
import "../home.css";

function Home() {
  return (
    <div className="container">
      <h1>DAA Assignment 1</h1>
      <div className="buttons">
        <a href="/Paper1" className="btn">Arboricity and Subgraph Lisitng Algorithms</a>
        <a href="/Paper2" className="btn">Listing All Maximal Cliques in Sparse Graphs in Near-optimal Time</a>
        <a href="/Paper3" className="btn">The worst-case time complexity for generating all maximal cliques and computational experiments</a>
      </div>

      {/* Group Members Section */}
      <div className="group-members">
        <h2>Group Members</h2>
        <ul>
          <li>Pradyum Agarwal</li>
          <li>Sagar Thomas</li>
          <li>Abhinav Chitturi</li>
          <li>Dheeraj M.P</li>
          <li>Ishu Gupta</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
