import React, { useState } from "react";

function App() {
  //array destructuring to extract elements from array-like structure
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target; //using this syntax to destructure an object (event.target) to extract the properties {name, value}

    setContact((prevValue) => {
      if (name === "fName") {
        return { fName: value, lName: prevValue.lName, email: prevValue.email };
      } else if (name === "lName") {
        return { fName: prevValue.fName, lName: value, email: prevValue.email };
      } else if (name === "email") {
        return { lName: prevValue.lName, fName: prevValue.fName, email: value };
      }

      // if (name === "fName") {
      //   return { ...prevValue, fName: value };
      // } else if (name === "lName") {
      //   return { ...prevValue, lName: value };
      // } else if (name === "email") {
      //   return { ...prevValue, email: value };
      // }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
