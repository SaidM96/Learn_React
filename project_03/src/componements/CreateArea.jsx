
function CreateArea(props) {
  return (
    <div>
      <form >
        <input name="title" placeholder="Title" onChange={props.changeInput} />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.changeInput} />
        <button onClick={props.addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
