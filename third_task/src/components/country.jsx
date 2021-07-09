import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import ReactFlagsSelect from "react-flags-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Country extends Component {
  render() {
    const { name, label, value, onChange, reset_key, error } = this.props;

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
          <ReactFlagsSelect
            selected={value}
            onSelect={onChange}
            className="form-element"
          />
        </FormGroup>
      </div>
    );
  }
}

export default Country;
