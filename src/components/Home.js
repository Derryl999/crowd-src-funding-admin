import React from "react";
import img from  '../Images/admin.svg'
import {NavLink} from 'react-router-dom'
function Home() {
  return (
    <header>
  <div className="smoothie">
    <img src={img} alt=""/>
  </div>
  <div className="headings">
    <h2>Serve Humanity</h2>
    <h3>If you can't feed a hundred people, then feed just one.</h3>
    <NavLink to="/dashboard" className="btn">Dashboard</NavLink>
  </div>
</header>
  );
}

export default Home;
