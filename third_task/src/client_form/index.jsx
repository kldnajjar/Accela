import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Container, Form, Row, Col } from "reactstrap";

import FormWrapper from "../components/form";

class ClientForm extends FormWrapper {
  state = {
    data: {
      first_name: null,
      last_name: null,
      gender: null,
      mobile_no: null,
      date_of_birth: null,
      country: null,
      age: null,
    },

    reset_key: 0,
    errors: {},
  };

  geneder_options = [
    {
      id: "male",
      name: "Male",
    },
    {
      id: "female",
      name: "Female",
    },
  ];

  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    gender: Joi.string().required().label("Gender"),
    mobile_no: Joi.string().required().label("Mobile No."),
    date_of_birth: Joi.date().required().label("Date of Birth"),
    country: Joi.string().required().label("Country"),
    age: Joi.label("Age"),
  };

  resetState = () => {
    let { data, reset_key } = this.state;

    data.first_name = null;
    data.last_name = null;
    data.gender = null;
    data.mobile_no = null;
    data.date_of_birth = null;
    data.country = null;

    reset_key += 1;
    this.setState({ data, reset_key });
  };

  doSubmit = () => {
    toast.success("Valid submission");
  };

  render() {
    return (
      <Container className="mt-4">
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              {this.renderInput("first_name", "First Name")}
            </Col>
            <Col sm={12} md={6} lg={6}>
              {this.renderInput("last_name", "Last Name")}
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              {this.renderSelect(
                "gender",
                "Gender",
                this.geneder_options,
                "Choose your gender"
              )}
            </Col>
            <Col sm={12} md={6} lg={6}>
              {this.renderInput("mobile_no", "Mobile No.", "", "number")}
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6}>
              {this.renderDatePicker("date_of_birth", "Date of Birth")}
            </Col>
            <Col sm={12} md={6} lg={6}>
              {this.renderCountry("country", "Country")}
            </Col>
          </Row>
          <Row className="mt-2 text-right mb-4">
            <Col>
              {this.renderButton("Reset", this.resetState, "danger")}
              {this.renderSubmitButton("Submit")}
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default ClientForm;
