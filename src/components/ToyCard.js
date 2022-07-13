import React from "react";

function ToyCard( { toy , handleDeleteToy, handleToyLikes}) {

  const { name, image, likes , id} = toy;

  function handleDeleteClick () {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        handleDeleteToy(toy);
      });
  }

function handleLikes(){
  
  const updatedObj = {
    likes: toy.likes + 1,
  };

  fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObj),
  })
  .then((resp) =>  resp.json())
  .then(handleToyLikes);
}

  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
