import axios from "axios";

export const allPokemon = async (state) => {
    const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon')
    state(peticion.data.results)
    
    
}

 export const infoPokemon = async (url) => {
    const result = await axios.get(url)
    return result.data.results
}
