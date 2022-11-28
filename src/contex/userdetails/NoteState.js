import React, { useState } from "react";
import NoteContext from "./noteContex";
const NoteState=(props)=> {
    const host = "http://localhost:4000";
    const notesInitial = [];
    const [notes, setnotes] = useState(notesInitial);
    const addetails = async (title, email, department, year , roll) => {
      const response = await fetch(`${host}/api/user/adduserdetails`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, email, department, year , roll}),
      });
      const note = await response.json();
      if(note.success){
        setnotes(notes.concat(note))
        console.log(note);
      }else{
        alert("rolll exist")
        console.log("exist")

      }
     console.log(note);
    };


      const fetchNotes = async () => {
        const response = await fetch(`${host}/api/user/allinfo`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
              
          },
        });
        const json = await response.json();
        setnotes(json);
      };
    
      const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/user/deletenotes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
              
          },
        });
          await response.json()
        const NewNode = notes.filter((note) => {
          return note._id !== id;
        });
        setnotes(NewNode);
      };
      const findcertificate = async (roll) => {
        const response = await fetch(`${host}/api/user/getInfo/${roll}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
              
          },
        });
        const NewNode = await response.json()
        if(!NewNode){
          alert('no certificate Found')
        }else{

          setnotes(NewNode);
        }
      };
  return (
    <div>
      <NoteContext.Provider value={{ notes, addetails,fetchNotes,deleteNote,findcertificate }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}
export default NoteState;
