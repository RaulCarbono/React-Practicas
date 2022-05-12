import React from "react";

function CreateTodoButton(){
    const onClickButton = () => {
        alert('Aqui deberia abrir el modal')
    }
    return (
        <button className="CreateButton"
        onClick={console.log('clic')}
        >￼        
            +
            
        </button>
    )
}

export {CreateTodoButton}