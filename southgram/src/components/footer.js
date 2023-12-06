import * as React from "react"
import imagens from "../images/perfil-de-mulher.png"

// ...

export const Footer = () => {
  return (
    <footer class="footer">

  <div class="container">
    <p class="creditos-texto">Créditos</p>
    <div class="linha"></div>
    
    <div class="row">
      <div class="col">
        <h3>Sobre</h3>
        © 2023 Southgram. Desenvolvido com ❤️ por Lorraine Carvalho. Explore nossas memórias fotográficas das incríveis capitais da América do Sul. 🌎✨

      </div>

      <div class="col">
        <h3>Autora</h3>
        <div className="autor-info" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={imagens} alt=""
                style={{ height: '100px', marginRight: '5px', filter:'invert(1)' }} />
    
            <div className="autor-detalhes">
                <p>Lorraine Carvalho da Silva</p>
                <p>Email: 1478129@sga.pucminas.br</p>
                <p>Telefone: (31) 9 7209-1790</p>
            </div>
         </div>
      </div>
    </div>
  </div>
</footer>
  )
}