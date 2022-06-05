import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Form, Button, Card } from 'react-bootstrap'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id = "email">
              <Form.Label>Email</Form.Label>
              <Form.Control type = "email" required onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group id = "password">
              <Form.Label>Password</Form.Label>
              <Form.Control type = "password" required onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <br/>
            <Button type="submit" className='w-100'>Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
          Already have an account ?{' '}
          <Link to='/' className='underline'>
            Sign in.
          </Link>
      </div>
    </>
  );
};

export default Signup;
