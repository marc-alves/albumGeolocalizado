import React from "react"
import { Link } from "gatsby"

export const GradeAlbuns = ({albuns}) => {
  return(
    <div className="container my-5">
      <h1 className="mb-4">Álbuns</h1>
      <div className="row">
        {albuns.map((album) => 
          <div className="col">
            <Link 
              to={"/album/" + album.id}
              className="album-na-grade" 
              style={{ backgroundImage: `url(${album.urlCapa})` }}
            >
              <div>
                {album.descricao}
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}