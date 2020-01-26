import React, { Component } from "react";
import { Formik } from "formik";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { FormInput } from "../components";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too Short")
    .max(70, "Name is too Long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required"),
  phone: Yup.number()
    .typeError("Enter number")
    .min(10, "Phone number is too short")
    .max(11, "Phone number is too long")
    .required("Phone number is required")
});

class Signup extends Component {
  render() {
    return (
      <div className="dark_background">
        <Container>
          <div className="center_items">
            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                password: "",
                aggrement: false
              }}
              validationSchema={SignupSchema}
              onSubmit={async values => {
                console.log({ values });
              }}
            >
              {({
                isSubmitting,
                errors,
                isValid,
                touched,
                values,
                handleBlur,
                handleSubmit,
                handleChange
              }) => {
                return (
                  <div className="authForm">
                    <Form loading={isSubmitting}>
                      <Form.Field>
                        <FormInput
                          error={errors.name}
                          touched={touched.name}
                          onChange={handleChange}
                          placeholder="Name"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </Form.Field>
                      <Form.Field>
                        <FormInput
                          error={errors.phone}
                          touched={touched.phone}
                          onChange={handleChange}
                          placeholder="Phone"
                          name="phone"
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </Form.Field>
                      <Form.Field>
                        <FormInput
                          error={errors.email}
                          touched={touched.email}
                          placeholder="Email Address"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </Form.Field>
                      <Form.Field>
                        <FormInput
                          error={errors.password}
                          touched={touched.password}
                          type="password"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          onChange={handleChange}
                          className="agreement_checkbox"
                          id="aggrement"
                          label="Remember Me"
                        />
                      </Form.Field>
                      <Link to="/login">
                        <Button className="login_button">Login</Button>
                      </Link>
                      <Button onClick={handleSubmit} type="submit">
                        Sign Up
                      </Button>
                    </Form>
                  </div>
                );
              }}
            </Formik>
          </div>
        </Container>
      </div>
    );
  }
}

export default Signup;
