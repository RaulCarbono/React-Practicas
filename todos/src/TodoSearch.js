import React from "react";




function TodoSearch(){
    const estado = React.useState()

    const onSearchValueChange = (event) =>{
        console.log(event)
    }
    return (
        <input 
        className="TodoSearch" 
        placeholder="React" 
        onChange={onSearchValueChange}/>
    )
}

export {TodoSearch}