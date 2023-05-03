/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    //console.log(createUser)

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        console.log(email, password, name, photo)


        //validation
        if(password.length < 6){
            setError('Please add at least 6 characters in your password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');

                setSuccess('User has been created successfully');
                updateUserData(result.user, name, photo)
                form.reset();


            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
                setSuccess('');
            })
    }

    const updateUserData = (user, name,photo) =>{
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            console.log('user name and url updated')
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    return (
        <Container className='w-25'>
            <h3>Please Register Your Account</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter your Name" required />
                    <Form.Text className="text-muted">


                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="name" name='photoUrl' placeholder="Enter Photo URL" required />
                    <Form.Text className="text-muted">


                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">


                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <Link to='/login'>
                <p className='mt-2 mb-2'
                    type="submit">
                    Already have an account? Please login
                </p>
            </Link>



        </Container>
    );
};

export default Register;