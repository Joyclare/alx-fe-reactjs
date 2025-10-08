import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="App">
      <h1>Form Handling in React</h1>

      <section>
        <h2>Controlled Components Form</h2>
        <RegistrationForm />
      </section>

      <section>
        <h2>Formik + Yup Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
