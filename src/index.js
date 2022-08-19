import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import App from "./App";

// class Mains extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>class component</h1>
//         <New />
//       </div>
//     );
//   }
// }
// class New extends React.Component {
//   render() {
//     return <h1>New component</h1>;
//   }
// }

// const element = React.createElement(
//   "div",
//   { className: "ferst" },
//   React.createElement("h1", {}, "Hallo"),
//   React.createElement("p", {}, "say hello")
// );

// const maStyle = {
//   textAlign: "center",
//   color: "brown",
//   fontSize: "20px",
// };

// const element = (
//   <div style={maStyle} className="React">
//     <h1>Hello</h1>
//     <h1>
//       hi pradeep{400 + 4}
//       {true ? "Yes" : "NO"}
//     </h1>
//   </div>
// );

// function One() {
//   return (
//     <div style={maStyle} className="React">
//       <h1>Henlo</h1>
//       <h1>
//         hi pradeep{400 + 4}
//         {true ? "Yes" : "NO"}
//       </h1>
//     </div>
//   );
// }

// function Two() {
//   return (
//     <div style={maStyle} className="React">
//       <h1>Two</h1>
//     </div>
//   );
// }

// function Three() {
//   return (
//     <div style={maStyle} className="React">
//       <h1>Three</h1>
//     </div>
//   );
// }
// function Main() {
//   return (
//     <div style={maStyle} className="React">
//       <h1>Main</h1>
//       <One />
//       <Two />
//       <Three />
//     </div>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
