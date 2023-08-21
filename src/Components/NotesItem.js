import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import NotesContext from '../context/notes/NotesContext'

export default function NotesItem(props) {
    const context = useContext(NotesContext);
    const { element, setUpNotes, toggleModal } = props
    const deleteHandler = (id) => {
        context.deleteNote(id);
        props.showAlert("success","Notes deleted successfully")
    }
    const editHandler = (id, title, description, tag) => {
        toggleModal();
        setUpNotes({
            id: id,
            title: title,
            description: description,
            tag: tag
        });  
    }
    return (
        <>
            <div className="col-md-4 my-3">
                <Card >
                    <Card.Body>
                        <Card.Title>{element.title}</Card.Title>
                        <Card.Text>
                            {element.description}
                        </Card.Text>
                        <div className="container d-flex justify-content-evenly">
                            <Button className="btn-sm" variant="danger" onClick={() => deleteHandler(element._id)}><i className="fa-solid fa-trash-can"></i></Button>
                            <Button className="btn-sm" variant="success" onClick={() => editHandler(element._id, element.title, element.description, element.tag)}><i className="fa-solid fa-pen-to-square"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
