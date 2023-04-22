import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../RegisterPage/registerpage.module.css';
import { authServices } from '../../services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginPage = () => {
  const { login } = authServices();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('This field is required')
      .email('Enter a valid email'),
    password: yup.string().required('This field is required'),
  });

  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values);
        toast.success('You have successfully logged in');
      } catch (error) {
        console.log(error);
        toast(error.response.data);
      }
    },
  });

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Log in</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label='Your email'
          variant='filled'
          type='email'
          name='email'
          fullWidth
          style={{ marginBottom: '20px' }}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email}
        />
        <TextField
          label='Password'
          variant='filled'
          type='password'
          name='password'
          fullWidth
          style={{ marginBottom: '40px' }}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password}
        />
        <Button
          fullWidth
          type='submit'
          variant='contained'
          style={{ backgroundColor: '#BF94E8', fontSize: '24px' }}>
          Log in
        </Button>
      </form>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </section>
  );
};

export default LoginPage;
