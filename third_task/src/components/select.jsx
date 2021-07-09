import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Select extends Component {
  render() {
    const {
      name,
      label,
      options,
      placeholder,
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
          <select
            name={name}
            className={`form-control form-element`}
            onChange={onChange}
          >
            {placeholder && (
              <option value="" default>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.id}
                value={option.id.toString().toLowerCase()}
              >
                {option.name}
              </option>
            ))}
          </select>
        </FormGroup>
      </div>
    );
  }
}

export default Select;
