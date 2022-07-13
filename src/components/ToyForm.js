import React, {useState} from "react";

const initialState = {
  name: "", 
  image: "", 
}

function ToyForm ({ handleAddToy }) {

  const [newForm, setNewForm] = useState(initialState);

  function handleChange(event) {
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit (e) {
    e.preventDefault();

    const newToy = {
      ...newForm,
      likes: 0,
    }
    
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
      },
      body: JSON.stringify(newToy),
    })
    .then((resp) => resp.json())
    .then((toy) => handleAddToy(toy));

    setNewForm(initialState)

     
  }


  return (
    <div className="container">
      <form className="add-toy-form"
       onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={newForm.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
        value={newForm.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
