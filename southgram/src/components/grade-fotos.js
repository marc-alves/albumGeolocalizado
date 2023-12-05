import React from "react";

export const GradeFotos = ({fotos, onClick}) => {
  return(
    <div className="my-5">
      <h2 className="mb-4">Fotos</h2>
      <div className="row">
        {fotos.map((foto) => 
          <div className="col mb-4" style={{ maxWidth: "400px" }}>
            <div
              className="foto-na-grade" 
              style={{ backgroundImage: `url(${foto.url})` }}
              onClick={() => onClick(foto.id)}
            >
            </div>
            <small>{foto.descricao}</small>
          </div>
        )}
      </div>
    </div>
  )
}