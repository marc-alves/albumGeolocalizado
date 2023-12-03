import React from "react";

export const GradeFotos = ({fotos}) => {
  return(
    <div className="container my-5">
      <h1 className="mb-4">Fotos</h1>
      <div className="row">
        {fotos.map((foto) => 
          <div className="col mb-4" style={{ maxWidth: "400px" }}>
            <div
              className="foto-na-grade" 
              style={{ backgroundImage: `url(${foto.url})` }}
            >
            </div>
          </div>
        )}
      </div>
    </div>
  )
}