/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleGithub from '../GoogleGithub/GoogleGithub';
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error);
        })

    
    }

   
    return (
        <Container className='w-25'>
            <h3>Please Login Your Account</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">


                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Link to='/register'>
                <p className='mt-2 mb-2' >
                    New to Web? Register
                </p>
            </Link>

            <div className='text-center'>
                <GoogleGithub></GoogleGithub>
            </div>
        </Container>
    );
};

export default Login;