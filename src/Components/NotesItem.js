import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function NotesItem(props) {
    const { element } = props
    return (
        <>
            <div className="col-md-4 my-3">
                <Card >
                    <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>
                            {element.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid rerum repudiandae minima eveniet nihil! Quis ut aliquid nesciunt veritatis, incidunt quos aliquam doloribus voluptates molestias, amet, deleniti officiis magnam cupiditate.
                        </Card.Text>
                        <div className="container d-flex justify-content-evenly">
                        <Button className="btn-sm" variant="danger">Delete</Button>
                        <Button className="btn-sm" variant="success">Update</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
