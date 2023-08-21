import React, { useContext, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import NotesContext from '../context/notes/NotesContext'

export default function AddNotes() {
    const context=useContext(NotesContext);
    const [notes,setNotes]=useState({
        title:"",
        description:"",
        tag:""
    });
    const onchange=(event)=>{
        setNotes({
            ...notes,
            [event.target.name]:event.target.value
        });
    }
    const onClickHandler=(event)=>{
        event.preventDefault(); 
        context.addNote(notes.title,notes.description,notes.tag);
        setNotes({
            title:"",
            description:"",
            tag:""
        });
    }
    return (
        <div className="container my-5">
            <h4 className='text-center'>Add Notes</h4>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title <strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={notes.title} name="title" onChange={onchange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description <strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control type="text" as="textarea" rows={5}  placeholder="Description" value={notes.description}  name="description" onChange={onchange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Tag<strong style={{color:"red"}}>*</strong></Form.Label>
                    <Form.Control type="text"  placeholder="Entire Tag" value={notes.tag}  name="tag" onChange={onchange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={onClickHandler}>
                    Submit
                </Button>
            </Form>
        </div>

    )
}
