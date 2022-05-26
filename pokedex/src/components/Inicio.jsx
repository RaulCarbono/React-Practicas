import React, { useEffect, useState } from 'react'
import {allPokemon} from '../funtions/Funtions'
import Pokemon from './Pokemon'

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
      {pokemon.results.map((pokemon, index) => (
       <Pokemon key={index} data={pokemon}/>
      ))}
     {console.log(pokemon)}
    </>
  )
}

export default Inicio