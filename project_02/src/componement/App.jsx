import { useState } from "react";
import TodoList from "./TodoList";

function App() {

  const [Items ,setItems] = useState([]);
  const [InputText ,setIputText] = useState("");

  function onChange(event){
    setIputText(event.target.value);
  }

  function addItem(){
    setItems(prevValue => {return [InputText,...prevValue]});
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {
          Items.map(item => {
          if (item !== "")
            return <TodoList todo={item} />;
          return <></>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;