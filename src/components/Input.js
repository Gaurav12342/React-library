import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={value}
        disabled={props.disabled}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
