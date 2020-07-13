import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Input from "../src/components/Input";

function App() {
  const [name, setName] = useState("");
  // console.log(name);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Input
        type="text"
        placeholder="My Name"
        value={name}
        name="name"
        onChange={handleChange}
      />
    </>
  );
}

export default App;
