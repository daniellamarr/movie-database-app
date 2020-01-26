import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { Message } from "semantic-ui-react";

const FormInput = ({ isValid, error, touched, ...props }) => {
  return (
    <>
      <Form.Input
      className="no_space_input"
        // error={
        //   error && touched
        //     ? {
        //         content: error,
        //         pointing: "below"
        //       }
        //     : null
        // }
        fluid
        {...props}
      />
      {error && touched && <small className="error_text">{error}</small>}
    </>
  );
};

export default FormInput;
