import React, { Component } from "react";
import { FormGroup } from "reactstrap";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class DatePickerWrapper extends Component {
  render() {
    const { name, label, value, placeholder, age, reset_key, onChange, error } =
      this.props;

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
        {age && <span className="float-right">{`${age}`}</span>}
        <FormGroup>
          <DatePicker
            name={name}
            selected={value}
            onChange={onChange}
            isClearable={true}
            placeholderText={placeholder}
            dateFormat={"dd-MMM-yyyy"}
            className={`form-control form-element`}
            autoComplete={"off"}
            disabledKeyboardNavigation
          />
        </FormGroup>
      </div>
    );
  }
}

export default DatePickerWrapper;
