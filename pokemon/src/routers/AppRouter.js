import { Routes, Route} from "react-router-dom";
import { AllPokemon } from '../components/AllPokemon';
import { GenerationsPokemon } from '../components/generations';
import  {FavoritesApp} from '../components/favorites';
import { Type } from '../components/typeCharts';
import { Sidebar } from "../components/Sidebar";

export const  AppRouter =() => {
    return ( 
     <div className="Principal">
            <Sidebar
            title = "Pokedex"
            />
        <div className="Pages-Container">
            <div className="Navbar">
                Navbar
            </div>
            <div className="Pages">
                <Routes>
                    <Route path = "/all"element = { < AllPokemon / > }/> 
                    <Route path = "/generations"element = { < GenerationsPokemon / > }/> 
                    <Route path = "/typeCharts"element = { < Type / > }/>
                    <Route path = "/favorites"element = { < FavoritesApp / > }/>
                </Routes> 
            </div>
         </div>
      </div>
    )
}