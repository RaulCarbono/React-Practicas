import React, { useEffect, useState } from 'react'
import {allPokemon} from '../funtions/Funtions'
import Pokemon from './Pokemon'
import { Buttoms } from './Buttoms'

const Inicio = () => {
  const [pokemon, setPokemon] = useState(null)
  useEffect (() => {
    allPokemon(setPokemon)
  }, [])

  if (!pokemon) {
    return "cargando...!"
  }
  return (
    <>
    <div className="app-contaner">
      <h1> Pokedex </h1>
      <div className="pokemon-container">
       <div className="all-container">
      {pokemon.results.map((pokemon, index) => (
       <Pokemon key={index} data={pokemon}/>
       
      ))}
      <Buttoms />
     {console.log(pokemon)}
          </div>
        </div>
     </div>
    </>
  )
}

export default Inicio