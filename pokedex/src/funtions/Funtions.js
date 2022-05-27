import axios from "axios";

export const allPokemon = async (state) => {
    const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon')
    state(peticion.data)
    
    
}

 export const infoPokemon = async (url) => {
    const result = await axios.get(url)
    return result.data
}

export const nextPokemon = async (state) => {
    const poke = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20s,')
    state(poke.data)
}