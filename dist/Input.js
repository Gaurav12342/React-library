import React, { useState } from "react";

const Input = props => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: props.type,
    placeholder: props.placeholder,
    name: props.name,
    value: value,
    disabled: props.disabled,
    onChange: handleChange
  }));
};

export default Input;