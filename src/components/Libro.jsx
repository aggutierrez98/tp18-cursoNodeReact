import React from 'react'

export const Libro = ({ libro }) => {
    return (
        <div className="libro">
            <div className="titulo">
                <h1>Libro:</h1>
                <h2>{libro.nombre}</h2>
            </div>
            <div className="descripcion">
                <h1>Descripcion:</h1>
                <h2>{libro.descripcion}</h2>
            </div>
            <div className="categoria">
                <h1>Categoria:</h1>
                <h2>{libro.categoria_id.nombre}</h2>
            </div>
            <div className="persona">
                <h1>Persona a la cual esta prestado:</h1>
                <h2>{libro.persona_id.nombre}</h2>
            </div>
        </div>
    )
}
