import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home.js";
import Profile from "./profile/profile.js";
function App() {
  const data = (param) => {
    console.log("passing", param);
  };
  return (
    <div className="App">
      <One calling={data} />
    </div>
  );
}
function One(props) {
  return (
    <div>
      {" "}
      pradeep{props.name}
      <button onClick={() => props.calling({ Name: "children" })}>
        Pass the Data
      </button>
    </div>
  );
}

export default App;
