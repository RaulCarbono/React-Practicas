import React, { useEffect, useState } from 'react'
import {allPokemon} from '../funtions/Funtions'
import Pokemon from './Pokemon'

const Inicio = () => {
  const [pokemon, setPokemon] = useState(null)
  useEffect (() => {
    allPokemon(setPokemon)
  }, [])

  return (
    <>
    {pokemon != null ? (
      pokemon.map(pokemon => (
       <Pokemon data={pokemon}/>
      ))
     ) : ('no hay personajes')}

    
    </>
  )
}

export default Inicio