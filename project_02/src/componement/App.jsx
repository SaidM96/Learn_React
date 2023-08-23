import { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea";

function App() {

  const [Items ,setItems] = useState([]);
  const [InputText ,setIputText] = useState("");

  function onChange(event){
    setIputText(event.target.value);
  }

  function addItem(){
    if (InputText !== "") setItems(prevValue => {return [InputText,...prevValue]});
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
          <InputArea onChange={onChange} InputText={InputText} addItem={addItem} />
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