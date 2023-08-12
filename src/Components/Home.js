import {Form,Button} from 'react-bootstrap'
import Notes from './Notes'

export default function Home() {
  return (
    <div className="container my-5">
      <h4 className='text-center'>Add Notes</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" /> 
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> 
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
      <div className="container">
        <Notes/>
      </div>
    </div>
  )
}
