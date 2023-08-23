import { useState } from "react";
import TodoList from "./TodoList";

function App() {

  const [Items ,setItems] = useState([]);
  const [InputText ,setIputText] = useState("");

  function onChange(event){
    if (event.target.value !== "") setIputText(event.target.value);
  }

  function addItem(){
    setItems(prevValue => {return [InputText,...prevValue]});
    setIputText('');
  }

  const funClick = (id) => {
    setItems(Items.filter((value, index) => index !== id))
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onChange} value={InputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {
          Items.map((item, index) => <TodoList key={index} id={index} todo={item} funcClick={funClick} />)
        }
        </ul>
      </div>
    </div>
  );
}

export default App;