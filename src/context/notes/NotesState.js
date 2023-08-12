import React, { useState } from 'react'
import NotesContext from './NotesContext'

const NotesState = (props) => {
    let initalNotes=[
        {
          "_id": "64d70899f868f2c08a3f7e77",
          "user": "64d66e9742dd23424512f9d3",
          "title": "shankar",
          "description": "bole nath",
          "tag": "dam dam damru ",
          "date": "2023-08-12T04:20:41.078Z",
          "createdAt": "2023-08-12T04:20:41.085Z",
          "updatedAt": "2023-08-12T04:20:41.085Z",
          "__v": 0
        } ,
        {
          "_id": "64d70899f868f2c08a3f7e77",
          "user": "64d66e9742dd23424512f9d3",
          "title": "shankar",
          "description": "bole nath",
          "tag": "dam dam damru ",
          "date": "2023-08-12T04:20:41.078Z",
          "createdAt": "2023-08-12T04:20:41.085Z",
          "updatedAt": "2023-08-12T04:20:41.085Z",
          "__v": 0
        } ,
        {
          "_id": "64d70899f868f2c08a3f7e77",
          "user": "64d66e9742dd23424512f9d3",
          "title": "shankar",
          "description": "bole nath",
          "tag": "dam dam damru ",
          "date": "2023-08-12T04:20:41.078Z",
          "createdAt": "2023-08-12T04:20:41.085Z",
          "updatedAt": "2023-08-12T04:20:41.085Z",
          "__v": 0
        } ,
        {
          "_id": "64d70899f868f2c08a3f7e77",
          "user": "64d66e9742dd23424512f9d3",
          "title": "shankar",
          "description": "bole nath",
          "tag": "dam dam damru ",
          "date": "2023-08-12T04:20:41.078Z",
          "createdAt": "2023-08-12T04:20:41.085Z",
          "updatedAt": "2023-08-12T04:20:41.085Z",
          "__v": 0
        } ,
        {
          "_id": "64d70899f868f2c08a3f7e77",
          "user": "64d66e9742dd23424512f9d3",
          "title": "shankar",
          "description": "bole nath",
          "tag": "dam dam damru ",
          "date": "2023-08-12T04:20:41.078Z",
          "createdAt": "2023-08-12T04:20:41.085Z",
          "updatedAt": "2023-08-12T04:20:41.085Z",
          "__v": 0
        } 
      ]
    const [notes,setNotes]=useState(initalNotes);

    return (
        <div>
            <NotesContext.Provider value={{notes,setNotes}}>
                {props.children}
            </NotesContext.Provider>
        </div>
    )
}

export default NotesState;
