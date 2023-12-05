import * as React from "react"

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Sobre</h3>
                </div>

                <div className="col">
                    <h3>Autora</h3>
                    <div className="author-info">
                        <div className="author-details">
                            <p>Lorraine Carvalho da Silva</p>
                            <p>Email: lorrainesilva.mg@jtexpress.com.br</p>
                            <p>Telefone: (31) 9 7209-1790</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}