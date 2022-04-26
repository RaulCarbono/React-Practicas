import React, {useEffect, useState } from "react";
import { Type } from "./typeCharts";

  const Pokemon =({pokemon}) => {
    const [image, setimage] = useState()
    const [type, setType] = useState()
    const [colorType, setColorType] = useState()
    
     useEffect (() =>{
        handleImage()
     }, [])

const handleImage = async () => { 
    const PokemonData = await fetch(pokemon.url).then(response => response.json()).then(data => data)
    console.log(PokemonData)
    //  setColorType(PokemonData.type[0].type.name)
    //  setType(PokemonData.types)
      setimage(PokemonData.sprites.other.dream_world.front_default)
}
return (
    <div className="PokemonContainer">
         <img src={image} alt="Back" with={120} height={120}/>
         <div className={`Pokemon Div_Pokemon${colorType}`}>
            <div className="Div_Name_Pokemon">
                <span>{pokemon.name}</span>
            </div>
            <div className="Div_Type_Pokemon">{
                type && type.map((tp,key) => (
                    <Type
                    key={key}
                    type={tp}
                    />
                ))
            }            
        </div>
    </div>
    
</div>
)
        }
export default Pokemon