import * as React from "react"
import { Layout } from "../../layouts/layout"
import { obterAlbum, obterFotosAlbum } from "../../services/services"
import { GradeFotos } from "../../components/grade-fotos";
import { ModalFotos } from "../../components/modal-fotos";
import { MapaAlbuns } from "../../components/mapa-albuns";
import { BotaoDestaque } from "../../components/botao-destaque";

const AlbumPage = ({ params }) => {

  const albumId = params["id"];
  const [album, setAlbum] = React.useState({})
  const [fotos, setFotos] = React.useState([])

  const [openModal, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    obterAlbum(albumId).then((album) => setAlbum(album))
    obterFotosAlbum(albumId).then((fotos) => {
      setFotos(fotos)
    })
  }, [albumId])

  return (
    <Layout>
      {album.id &&
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <img src={album.urlCapa} alt={album.titulo} className="w-100" />
          </div>
          <div className="col-8">
            <p>Data de registo: {(album.data || "").split("-").reverse().join("/")}</p>
            <h1 className="mt-3 mb-4">{album.titulo}</h1>
            <p>{album.descricao}</p>
            <p>
              Latitude: {album.localizacao.latitude} <br/>
              Longitude: {album.localizacao.longitude}
            </p>
            <BotaoDestaque album={album} />
          </div>
        </div>
        <GradeFotos fotos={fotos} onClick={(id) => setOpenModal(id)} />
        <ModalFotos fotos={fotos} open={openModal} onClose={() => setOpenModal(false)} />
      </div>}
    </Layout>
  )
}

export default AlbumPage