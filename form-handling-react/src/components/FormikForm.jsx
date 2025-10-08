import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
});

function FormikForm() {
  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
