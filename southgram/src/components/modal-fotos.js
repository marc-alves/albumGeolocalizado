import React from "react";
import { Carousel, Modal } from "react-bootstrap"; 

const CarouselImage = ({img, alt}) => {
  return (
    <div className="carousel-modal-img">
      <img src={img} alt={alt} />
    </div>
  )
}

export const ModalFotos = ({fotos=[], open, onClose}) => {
  return (
    <Modal show={open} onBackdropClick={onClose} onExit={onClose} onHide={onClose} size="lg" style={{ backgroundColor: "transparent" }}>
      <Carousel defaultActiveIndex={fotos.findIndex(f => f.id === open)}>
      { fotos.map((foto) =>   
        <Carousel.Item key={foto.id}>
          <CarouselImage img={foto.url} alt={foto.descricao} />
          <Carousel.Caption style={{ backgroundColor: "#00000070" }}>
            <b>{foto.descricao}</b>
          </Carousel.Caption>
        </Carousel.Item>
      ) }
      </Carousel>
    </Modal>
  )
}