import React, {useState, useEffect} from 'react'
import { infoPokemon } from '../funtions/Funtions'


  
const Pokemon = (props) => {
  const [info, setInfo] = useState(null) 
    useEffect (  () => { 
    handlePokemons()
     
    }, [] )

    const handlePokemons = async () => {
      const pokeball = await infoPokemon(props.data.url)
      setInfo(pokeball)
    }

    if (!info) {
      return "cargando...!"
    }

  return (
    <>

    <img  src={info.sprites.other.dream_world.front_default}/>
  
    </>
  )
}

export default Pokemon