
function CreateArea(props) {
  return (
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={props.changeInput} value={props.value.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.changeInput} value={props.value.content  } />
        <button onClick={props.addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
