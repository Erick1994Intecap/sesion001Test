import React from "react";

export const LibrosComponente =() =>{

    const libros = [
        { nombre: "Cien Años de Soledad", autor: "Gabriel García Márquez", editorial: "Sudamericana" },
        { nombre: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", editorial: "Francisco de Robles" },
        { nombre: "1984", autor: "George Orwell", editorial: "Secker & Warburg" },
        { nombre: "El Principito", autor: "Antoine de Saint-Exupéry", editorial: "Reynal & Hitchcock" },
        { nombre: "Matar a un Ruiseñor", autor: "Harper Lee", editorial: "J.B. Lippincott & Co." },
        { nombre: "Orgullo y Prejuicio", autor: "Jane Austen", editorial: "T. Egerton" },
        { nombre: "Crimen y Castigo", autor: "Fiódor Dostoyevski", editorial: "The Russian Messenger" },
        { nombre: "La Odisea", autor: "Homero", editorial: "Penguin Classics" },
        { nombre: "En Busca del Tiempo Perdido", autor: "Marcel Proust", editorial: "Grasset" },
        { nombre: "El Gran Gatsby", autor: "F. Scott Fitzgerald", editorial: "Charles Scribner's Sons" }
    ];

    return(
        <div>
            <h1>Lista de Libros</h1>
            <ul>
                {libros.map((libro, index) => (
                    <li key={index}>
                        <h3>{libro.nombre}</h3>
                        <p><strong>Autor:</strong> {libro.autor}</p>
                        <p><strong>Editorial:</strong> {libro.editorial}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}