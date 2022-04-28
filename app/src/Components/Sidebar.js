import React from "react"
import { Link } from "react-router-dom"
export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Sales">Sales</Link>
                </li>
                <li>
                    <Link to="/Client">Client</Link>
                </li>
                
            
            </ul>
        </div>
        )
    }