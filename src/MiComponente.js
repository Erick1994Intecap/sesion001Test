import React from "react";

const MiComponente =() =>{
    const nombre = "Erick";
    const direccion = "Ciudad";

    let usuario = {nombre:"Erick Ruiz", direccion:"Ciudad"}
    return(
        <div>
            <h1>Informacion</h1>
            <ul>
                <li>Nombre: {nombre}</li>
                <li>Nombre usuario: {usuario.nombre}</li>
            </ul>
        </div>
    )
};

export default MiComponente;
