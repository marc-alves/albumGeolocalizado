import * as React from "react"
import { Layout } from "../layouts/layout"
import { obterFotosInicio } from "../services/services"
import { HomeCarousel } from "../components/home-carousel"

const IndexPage = () => {

  const [fotosDestaque, setFotosDestaque] = React.useState([])

  React.useEffect(() => {
    return
    obterFotosInicio().then((fotos) => {
      console.log(fotos)
      setFotosDestaque(fotos)
    })
  }, [])

  return (
    <Layout>
      <HomeCarousel fotos={[]} />
    </Layout>
  )
}

export default IndexPage