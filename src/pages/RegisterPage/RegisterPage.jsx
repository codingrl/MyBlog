import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      email,
      name, 
      password
    }
    console.log(newUser);
  }
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label='Your email'
          variant='filled'
          type='email'
          fullWidth
          required
          style={{ marginBottom: '20px' }}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label='Your name'
          variant='filled'
          type='text'
          fullWidth
          required
          style={{ marginBottom: '20px' }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label='Password'
          variant='filled'
          type='password'
          fullWidth
          required
          style={{ marginBottom: '40px' }}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          type='submit'
          variant='contained'
          style={{ backgroundColor: '#BF94E8', fontSize: '24px' }}>
          Register
        </Button>
      </form>
    </section>
  );
};

export default RegisterPage;
