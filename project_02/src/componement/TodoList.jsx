import { useState } from "react";




function TodoList(props){
    const [finishTodo, setTodoFinish] = useState(false);
    const change = () => {
        setTodoFinish(!finishTodo);
    }
    
    const liStyle = {
        textDecoration: finishTodo ? 'line-through' : 'none'
    }

    return <li onClick={change} style={liStyle} >{props.todo}</li>;
}

export default TodoList;