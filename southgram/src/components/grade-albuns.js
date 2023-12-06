import React from "react"
import { Link } from "gatsby"

export const GradeAlbuns = ({albuns}) => {
  return(
    <div className="container my-5">
      <h1 className="mb-4">Álbuns</h1>
      <div className="row">
        {albuns.map((album) => 
          <div key={album.id} className="col mb-4" style={{ minWidth: "400px" }}>
            <Link 
              to={"/album/" + album.id}
              className="album-na-grade" 
              style={{ backgroundImage: `url(${album.urlCapa})` }}
            >
              <div className="descricao-album-na-grade">
                <b>{album.titulo}</b> <br/>
                {album.descricao}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}