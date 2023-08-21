import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import NotesContext from '../context/notes/NotesContext'

export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const context = useContext(NotesContext);

    const { setToken } = context;

    let navigate = useNavigate();

    const onchangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData({
            ...data,
            [name]: value
        });
    }

    const SubmitHandler = async (event) => {
        event.preventDefault();
        try {
            // console.log("hii shiva i am here");
            let response = await fetch(process.env.REACT_APP_LOGIN_USER, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: data.email, password: data.password })
            });
            console.log(data);
            let parsedata = await response.json(); 

            if (parsedata.token) { 
                localStorage.setItem('token', parsedata.token);
                setToken(parsedata.token);
                navigate("/home"); 
            } else {
                alert("Please enter valid credentials");
            }
        }
        catch (Error) {
            console.log(Error);
        }
    }

    return (
        <>
            <Container className='my-4'> 
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={onchangeHandler} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={onchangeHandler} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={SubmitHandler}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
