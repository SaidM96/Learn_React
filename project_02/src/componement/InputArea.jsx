const InputArea = (props) => {
    return <div className="form">
        <input type="text" onChange={props.onChange} value={props.InputText}/>
        <button onClick={props.addItem}>
          <span>Add</span>
        </button>
      </div>
}

export default InputArea;