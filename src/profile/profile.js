import React from "react";
import "./profile.css";
import legends from "../assets/download.png";
import Firstchild from "../Children/firstchild";

function Profile(data) {
  console.log(data.obj.name);
  return (
    <div>
      <div className="flexing">
        <h1>{data.obj.name}</h1>;<h1>Pradeep.N</h1>
        <input style={{ padding: "15px", width: "200px" }}></input>
        <button>Submit</button>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="group1">
        <img src={legends} className="image" />
        <img src={legends} className="image" />
        <img src={legends} className="image" />
      </div>
      <div className="group2">
        <img src={legends} className="image" />
        <img src={legends} className="image" />
        <img src={legends} className="image" />
      </div>

      <Firstchild obj={{ name: "MT", group: 15 }} />
    </div>
  );
}

export default Profile;
