import React, { useState, useEffect } from 'react'
import Pokemon from './pokemon'
import './style.scss'

export const AllPokemon = () => {
    const [pokemonAll, setPokemonAll] =useState([])
  
  useEffect(() => {
    handlePokemons()
  }, [])

  const handlePokemons = async () =>{
    return await fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json()).then(data => setPokemonAll(data.results))
  }

  return (
    <>                      
            <div className='Pokemons'>{
              pokemonAll.map((element, key) =>(
                <Pokemon 
                key={key}
                pokemon={element}
                />
              ))
            }
            </div>
            <div className='Pagination_Container'>
            </div>
    
    </>
    )
}