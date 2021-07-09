import React, { Component } from "react";
import { FormGroup, InputGroup } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Input extends Component {
  render() {
    const {
      name,
      label,
      placeholder,
      type,
      value,
      reset_key,
      onChange,
      error,
    } = this.props;

    return (
      <div
        className={`form-group ${error ? "field_error" : ""}`}
        key={reset_key}
      >
        {label && (
          <label htmlFor={name}>
            <strong>{label}</strong>
          </label>
        )}
        {value && (
          <FontAwesomeIcon icon={faCheckCircle} className="green-color ml-2" />
        )}
        <FormGroup>
          <InputGroup>
            <input
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              type={type}
              value={value ? value : ""}
              className={`form-control form-element`}
              autoComplete={"off"}
            />
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default Input;
