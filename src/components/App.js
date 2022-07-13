import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyLoad, setToyLoad] = useState([]);

  useEffect(()=> { 
    fetch("http://localhost:3001/toys")
    .then((resp) => resp.json())
    .then((data) => setToyLoad(data))
  }, [])
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  } 
 
  function handleAddToy (toy) {
    setToyLoad([...toyLoad, toy])
  }
 
  function handleDeleteToy (toyToDelete) {
    const updatedToys= toyLoad.filter((toy) => toy.id !== toyToDelete.id )
    setToyLoad(updatedToys);
  }

  function handleToyLikes (likedToy) {
    const updatedToys= toyLoad.map((toy) => 
    toy.id === likedToy.id ? likedToy : toy);
    setToyLoad(updatedToys);
  }

  // function handleUpdateToy(updatedToy) {
  //   const updatedToys = toys.map((toy) =>
  //     toy.id === updatedToy.id ? updatedToy : toy
  //   );
  //   setToys(updatedToys);
  // }

  

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
       toyLoad={toyLoad}
       handleDeleteToy={handleDeleteToy}
       handleToyLikes={handleToyLikes} />
    </>
  );
}

export default App;
