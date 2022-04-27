import React from "react"
import { Link } from "react-router-dom"
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h1 >pokedex </h1>
            <ul>
                <input type="text" search/> 
                <li>
                    <Link to="">All</Link>
                </li>
                <li>
                    <Link to="">Favorites</Link>
                </li>
                <li>
                    <Link to="">Generations</Link>
                </li>
                <li>
                    <Link to="">Type Chart</Link>
                </li>
            
            </ul>
        </div>
    )  
}
