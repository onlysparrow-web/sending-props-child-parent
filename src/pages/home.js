import React from "react";
import "./home.css";
import logos from "../assets/img1.png";
import Profile from "../profile/profile";
import Firstchild from "../Children/firstchild";

const Home = () => {
  return (
    <div className="navigation">
      <img className="fab" src={logos}></img>
      <nav>
        <a>HOME</a>
        <a>PROFILE</a>
        <a>EVENT</a>
        <a>OPTIONS</a>
        <a>DETAILS</a>
        <a>CONTACT</a>
      </nav>
      <div className="buttons">
        <button>WEBSITE</button>
        <button>GET CERTIFIED</button>
        <button>LOG IN</button>
      </div>

      <Profile obj={{ name: "Pradeep", group: "FSD-10" }} />
      <Profile obj={{ name: "sparrow", group: "FSD-10" }} />
    </div>
  );
};

export default Home;
