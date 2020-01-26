import React from "react";
import { Formik } from "formik";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { FormInput } from "../components";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required")
});

const Login = props => {
  return (
    <div className="dark_background">
      <Container>
        <div className="center_items">
          <Formik
            initialValues={{
              email: "",
              password: "",
              aggrement: false
            }}
            validationSchema={LoginSchema}
            // validateOnChange={false}
            // validateOnBlur={false}
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
                        // value={values.aggrement}
                        label="Remember Me"
                      />
                    </Form.Field>
                    <Button onClick={handleSubmit} className="login_button">
                      Login
                    </Button>
                    <Link to="/signup">
                      <Button type="submit">Sign Up</Button>
                    </Link>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </Container>
    </div>
  );
};

export default Login;
