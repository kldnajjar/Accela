import React, { Component } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";

import { getAge } from "../util/global";

import Input from "./input";
import Select from "./select";
import DatePickerWrapper from "./datepicker";
import Country from "./country";

class FormWrapper extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);

    if (!result.error) return null;

    const errors = {};
    let item;
    for (item of result.error.details) errors[item.path] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleBindChange = (name, value) => {
    const { data, errors } = this.state;

    const input = {
      name,
      value,
    };

    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    data[name] = value;

    if (name === "date_of_birth") {
      const age = getAge(value);

      if (age) {
        data.age = age;
      } else {
        data.age = null;
        data[name] = null;
        errors[name] = true;
      }
    }

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    if (errors) {
      this.setState({ errors: errors || {} });
      return toast.error("Fill the below fields");
    }

    this.doSubmit();
  };

  renderSubmitButton = (label, type = "primary") => {
    return (
      <button
        // disabled={this.validate()}
        type="submit"
        className={`btn btn-${type} mr-2`}
      >
        {label}
      </button>
    );
  };

  renderButton = (label, event, type = "primary") => {
    return (
      <button type="button" className={`btn btn-${type} mr-2`} onClick={event}>
        {label}
      </button>
    );
  };

  renderInput = (name, label, placeholder = "", type = "text") => {
    let { data, reset_key, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name] || ""}
        reset_key={reset_key}
      />
    );
  };

  renderSelect = (name, label, options, placeholder = null) => {
    let { data, reset_key, errors } = this.state;

    return (
      <Select
        name={name}
        label={label}
        options={options}
        placeholder={placeholder}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name] || ""}
        reset_key={reset_key}
      />
    );
  };

  renderCountry = (name, label) => {
    let { data, reset_key, errors } = this.state;

    return (
      <Country
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleBindChange.bind(this, name)}
        error={errors[name] || ""}
        reset_key={reset_key}
      />
    );
  };

  renderDatePicker = (name, label, placeholder = "Select a date") => {
    let { data, reset_key, errors } = this.state;

    return (
      <DatePickerWrapper
        name={name}
        label={label}
        value={data[name] && new Date(data[name])}
        placeholder={placeholder}
        age={data.age}
        onChange={this.handleBindChange.bind(this, name)}
        error={errors[name] || ""}
        reset_key={reset_key}
      />
    );
  };
}

export default FormWrapper;
