import React from "react";

export const EventosComponente =() =>{

    const hasDadoClick=(e) =>{
        alert("Has dado click en el boton")
    }

    const hasDadoDobleClick=(e) =>{
        alert("Has dado doble click en el boton")
    }

    const hasEntrado=(e) =>{
        console.log("Has entrado")
    }

    const hasSalido=(e) =>{
        console.log("Has salido")
    }

    

    return(
        <div>
            <h1>Eventos en react</h1>
            <button onClick={()=>
                console.log("Hola soy el evento click")
            }>Haz click</button>
            <button onClick={(hasDadoClick)}>Haz click</button>
            <button onDoubleClick={(hasDadoDobleClick)}>Haz doble click</button>
            <button id= "caja" onMouseEnter={hasEntrado} onMouseLeave={hasSalido}>Haz doble click</button>
        </div>
    );

};