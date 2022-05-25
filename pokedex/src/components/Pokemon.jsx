import React, {useState, useEffect} from 'react'
import { infoPokemon } from '../funtions/Funtions'


  
const Pokemon = (props) => {
  const [info, setInfo] = useState(null) 
    useEffect (() => {
      setInfo(infoPokemon(props.data.url))
     
    }, )

  return (
    <>
    {info != null ? (

    <h1> {info.base_experience}</h1>
     ) : ('no hay personajes')}

    
    </>
  )
}

export default Pokemon