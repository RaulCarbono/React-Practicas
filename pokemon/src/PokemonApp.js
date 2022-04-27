import React from 'react'
import {AppRouter} from './routers/AppRouter';
import {BrowserRouter} from 'react-router-dom';
//  import { Navbar } from './components/Navbar';
// import { Sidebar } from './components/Sidebar';
export const PokemonApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
            
        </BrowserRouter>
    )
}
