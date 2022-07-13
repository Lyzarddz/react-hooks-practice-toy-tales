import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyLoad , handleDeleteToy, handleToyLikes}) {

   const toyRows = toyLoad.map((toy)=> {
    return <ToyCard
    key={toy.id}
    toy={toy}
    handleDeleteToy= {handleDeleteToy}
    handleToyLikes={handleToyLikes}
    />
  })




  return (
    <div id="toy-collection">{toyRows}</div>
  );
}

export default ToyContainer;
