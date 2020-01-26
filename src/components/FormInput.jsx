import React, { Component } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { Message } from "semantic-ui-react";

class FormInput extends Component {
  render() {
    const { isValid, error, touched, ...props } = this.props;
    return (
      <>
        <Form.Input className="no_space_input" fluid {...props} />
        {error && touched && <small className="error_text">{error}</small>}
      </>
    );
  }
}

export default FormInput;
