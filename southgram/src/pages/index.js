import * as React from "react"
import { Layout } from "../layouts/layout"
import { obterAlbuns, obterFotosInicio } from "../services/services"
import { HomeCarousel } from "../components/home-carousel"
import { GradeAlbuns } from "../components/grade-albuns"
import { MapaAlbuns } from "../components/mapa-albuns"

const IndexPage = () => {

  const [fotosDestaque, setFotosDestaque] = React.useState([])
  const [albuns, setAlbuns] = React.useState([])

  React.useEffect(() => {
    obterFotosInicio().then((fotos) => {
      console.log(fotos)
      setFotosDestaque(fotos)
    })
    obterAlbuns().then((albuns) => {
      console.log(albuns)
      setAlbuns(albuns)
    })
  }, [])

  return (
    <Layout>
      <HomeCarousel fotos={fotosDestaque} />
      <MapaAlbuns albuns={albuns} />
      <GradeAlbuns albuns={albuns} />
    </Layout>
  )
}

export default IndexPage