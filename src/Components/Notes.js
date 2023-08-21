import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import NotesContext from '../context/notes/NotesContext';
import NotesItem from './NotesItem';
import AddNotes from './AddNotes';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Notes(props) {
    const context = useContext(NotesContext);
    const { notes, fetchData } = context;

    const [updateNotes, setUpdateNotes] = useState({
        id:"",
        title: "",
        description: "",
        tag: ""
    });
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const OnChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUpdateNotes({
            ...updateNotes,
            [name]: value
        });
    }


    const updateHandler=()=>{
        context.editNotes(updateNotes.id, updateNotes.title, updateNotes.description, updateNotes.tag);
        setUpdateNotes({
            id:"",
            title: "",
            description: "",
            tag: ""
        });
        props.showAlert("success","Notes updated successfully")
        toggleModal();
    }
    return (
        <>
            <AddNotes showAlert={props.showAlert}/>
            <Modal
                show={modalVisible}
                onHide={toggleModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title >Notes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title <strong style={{ color: "red" }}>*</strong></Form.Label>
                            <Form.Control type="text" onChange={OnChangeHandler} placeholder="Enter Title" value={updateNotes.title} name="title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description <strong style={{ color: "red" }}>*</strong></Form.Label>
                            <Form.Control type="text" onChange={OnChangeHandler} as="textarea" rows={5} placeholder="Description" value={updateNotes.description} name="description" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Tag<strong style={{ color: "red" }}>*</strong></Form.Label>
                            <Form.Control type="text" onChange={OnChangeHandler} placeholder="Entire Tag" value={updateNotes.tag} name="tag" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateHandler}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="container">
                <div className='row'>
                    {notes && notes.map((element, index) => {
                        return <NotesItem key={index} toggleModal={toggleModal} showAlert={props.showAlert} setUpNotes={setUpdateNotes} element={element} />
                    })}
                </div>
            </div>
        </>
    );
}
