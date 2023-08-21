import React, { useState } from 'react'
import NotesContext from './NotesContext'

const NotesState = (props) => {

  const [notes, setNotes] = useState([]);
  // eslint-disable-next-line
  // const [token, setToken] = useState("");

  const addNote = async (title, description, tag) => {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken !== "") {

      let data = {
        title: title,
        description: description,
        tag: tag
      };
      const response = await fetch(process.env.REACT_APP_ADD_NOTES, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwttoken}`,
        },
        body: JSON.stringify(data)
      });
      // console.log("add successfully")
      fetchData();
      return response.json();
    }
  }

  const fetchData = async () => {
    const jwttoken = localStorage.getItem('token');
    // console.log(jwttoken);
    if (jwttoken !== "") {
      const data = await fetch(process.env.REACT_APP_GETALL_NOTES, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwttoken}`,
        }
      });
      let parsedata = await data.json();
      setNotes(parsedata.notes)
      return;
    }
  }


  const deleteNote = async (id) => {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken !== "") {
      try {
        const response = await fetch(`${process.env.REACT_APP_DELETE_NOTES}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwttoken}`,
          },
        });

        if (!response.ok) {
          console.error(`Failed to delete note with status: ${response.status}`);
          return;
        }
        // console.log("Note deleted successfully");
        fetchData();
      } catch (error) {
        console.error("An error occurred while deleting the note:", error);
      }
    }
  };


  const editNotes = async (id, title, description, tag) => {
    const jwttoken = localStorage.getItem('token');
    if (jwttoken !== "") {
      try {
        let data = {
          title: title,
          description: description,
          tag: tag
        };
        const response = await fetch(`${process.env.REACT_APP_UPDATE_NOTES}/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwttoken}`,
          },
          body: JSON.stringify(data)
        });
        fetchData();
        return response.json();
      }
      catch (Error) {
        console.log(Error);
      }
    }
  }

  return (
    <div>
      <NotesContext.Provider value={{ notes, addNote, deleteNote, editNotes, fetchData }}>
        {props.children}
      </NotesContext.Provider>
    </div>
  )
}

export default NotesState;
