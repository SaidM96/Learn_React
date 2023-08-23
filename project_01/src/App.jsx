import { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  //first methode

  // function change(event) {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case "fName":
  //       setContact({
  //         fName: value,
  //         lName: contact.lName,
  //         email: contact.email
  //       });
  //       break;
  //     case "lName":
  //       setContact({
  //         fName: contact.fName,
  //         lName: value,
  //         email: contact.email
  //       });
  //       break;
  //     case "email":
  //       setContact({
  //         fName: contact.fName,
  //         lName: contact.lName,
  //         email: value
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // optimised method
 function change(event){
    const { name, value } = event.target;
    setContact(prevValue => ({...prevValue, [name]: value}));
 }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={change} />
        <input name="lName" placeholder="Last Name" onChange={change} />
        <input name="email" placeholder="Email" onChange={change} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
