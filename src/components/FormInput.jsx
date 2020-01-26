import React from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

const FormInput = ({ isValid, error, touched, ...props }) => {
  return (
    <Form.Input
      error={
        error && touched
          ? {
              content: error,
              pointing: "below"
            }
          : null
      }
      fluid
      {...props}
    />
  );
};

export default FormInput;
