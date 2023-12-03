import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselImage = ({img, alt}) => {
  return (
    <div className="carousel-img">
      <img src={img} alt={alt} width={"100%"} />
    </div>
  )
}

export const HomeCarousel = ({fotos}) => {
  return (
    <Carousel>
      { fotos.map((foto) =>   
        <Carousel.Item>
          <CarouselImage key={foto.id} img={foto.url} alt={foto.descricao} />
          <Carousel.Caption>
            <p>{foto.descricao}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ) }
    </Carousel>
  );
}