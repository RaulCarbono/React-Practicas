import React from "react";

const Buttoms = () => {
    return(
      <div>
          <button className="Previos"> Previous </button>
          <button className="Next" onClick={'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20,'}> Next </button> 
      </div>)
}

export {Buttoms}