import * as React from "react"
import { Layout } from "../../layouts/layout"
import { obterAlbum, obterFotosAlbum } from "../../services/services"
import { GradeFotos } from "../../components/grade-fotos";

const AlbumPage = ({ params }) => {

  const albumId = params["id"];
  const [album, setAlbum] = React.useState({})
  const [fotos, setFotos] = React.useState([])

  React.useEffect(() => {
    obterAlbum(albumId).then((album) => setAlbum(album))
    obterFotosAlbum(albumId).then((fotos) => {
      setFotos(fotos)
    })
  }, [albumId])

  return (
    <Layout>
      <div className="container">
        <h1 className="my-5">{album.titulo}</h1>
        <GradeFotos fotos={fotos} />
      </div>
    </Layout>
  )
}

export default AlbumPage