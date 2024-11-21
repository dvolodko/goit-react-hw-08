import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  function handleSubmit(values, actions) {
    dispatch(register({ ...values }));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <Form className={css.form}>
        <div className={css.formElementWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage
            name="name"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formElementWrapper}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={emailFieldId}
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <div className={css.formElementWrapper}>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordFieldId}
            className={css.input}
          />
          <ErrorMessage
            name="password"
            component="p"
            className={css.errorMessage}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
