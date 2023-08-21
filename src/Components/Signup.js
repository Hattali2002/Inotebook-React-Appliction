import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const onchange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({
      ...data,
      [name]: value
    })
  }

  const onClickHandler = async (event) => {
    event.preventDefault();
    let response = await fetch(process.env.REACT_APP_SIGNUP_USER, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: data.name, email: data.email, password: data.password })
    })
    let parsedata = await response.json();
    if (parsedata.message === "Registered Successfully") {
      navigate("/login");
      props.showAlert("success", "Account created successfully");
    }
    else{  
      props.showAlert("Failed","Please enter valid email and password");
    }
  }


  return (
    <Container className='my-4'>
      <Form method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={data.name} onChange={onchange} placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={data.email} onChange={onchange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={data.password} onChange={onchange} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onClickHandler}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
