import { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {

  const [InputNote, setInputNote] = useState({title:"", content:""});
  const [Notes, setNotes] = useState([]);

  const onChangeInpput = (e) => {
      e.preventDefault();
      if (e.target.name === "title")
        setInputNote({title:e.target.value, content:InputNote.content});
      else
        setInputNote({title:InputNote.title, content:e.target.value});
  }

  const deleteNote = (id) => {
    setNotes(Notes.filter((item, index) => index !== id))
  }

  const Additem = (e) => {
    e.preventDefault();
    if (InputNote.title !== "" && InputNote.content !== "") setNotes(prevValue => [InputNote, ...prevValue]);
    setInputNote({title:"", content:""}); 
  }

  return (
    <div>
      <Header />
      <CreateArea changeInput={onChangeInpput} addItem={Additem} value={InputNote} />
      {
        Notes.map((item, index) => <Note  key={index} id={index} title={item.title} content={item.content} deleteNote={deleteNote}  />)
      }
      <Footer />
    </div>
  );
}

export default App;
