import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';
import { authServices } from '../../services/auth';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const RegisterPage = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('This field is required')
      .email('Enter a valid email'),
    username: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await registerUser(values);
        console.log(data);
        toast('Пользователь зарегистрирован');
      } catch (err) {
        toast('Email или Имя уже существуют');
      }
    },
  });

  const { registerUser } = authServices();

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ''}
          onBlur={formik.handleBlur}
          label='Your email'
          variant='filled'
          type='email'
          name='email'
          fullWidth
          style={{ marginBottom: '20px' }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          label='Your name'
          variant='filled'
          type='text'
          name='username'
          error={formik.errors.username}
          helperText={formik.errors.username ? formik.errors.username : ''}
          onBlur={formik.handleBlur}
          fullWidth
          style={{ marginBottom: '20px' }}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <TextField
          label='Password'
          variant='filled'
          type='password'
          name='password'
          error={formik.errors.password}
          helperText={formik.errors.password ? formik.errors.password : ''}
          onBlur={formik.handleBlur}
          fullWidth
          style={{ marginBottom: '40px' }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          fullWidth
          type='submit'
          variant='contained'
          style={{ backgroundColor: '#BF94E8', fontSize: '24px' }}>
          Register
        </Button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default RegisterPage;
