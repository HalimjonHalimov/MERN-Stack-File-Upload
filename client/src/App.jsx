import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <form className="form-wrapper">
      <label>
        FirstName
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Please enter you firstname"
        />
      </label>
      <label>
        LastName
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Please enter you lastname"
        />
      </label>
      <label>
        Picture
        <input
          type="file"
          name="picture"
          id="picture"
          placeholder="Please enter you picture"
        />
      </label>
    </form>
  );
}

export default App;
