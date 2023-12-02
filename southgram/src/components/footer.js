import * as React from "react"

export const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer-section">
            <h3>Sobre</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nulla eu tellus congue vehicula
                vitae a ligula. Praesent iaculis molestie felis blandit vulputate. Morbi quis ornare nisl. Phasellus sed.
            </p>
        </div>

        <div class="footer-section">
            <h3>Autora</h3>
            <div class="author-info">
                <img src="assets/img/person.jpg" alt="Foto da Autora" />
                <div class="author-details">
                    <p>Lorraine Carvalho da Silva</p>
                    <p>Email: lorrainesilva.mg@jtexpress.com.br</p>
                    <p>Telefone: (31) 9 7209-1790</p>
                </div>
            </div>
        </div>
    </footer>
  )
}