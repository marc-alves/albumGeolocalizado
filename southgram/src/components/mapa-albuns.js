import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect } from 'react';

const at = 'pk.eyJ1IjoibWFyY2lvanIxNSIsImEiOiJjbHBvY2VhNXkwZ2xiMmtraDNpeXl3eDhhIn0.0tdl_QOyN_AOPPM_W3TkRA'

export const MapaAlbuns = ({albuns = []}) => {

  useEffect(() => {
    mapboxgl.accessToken = at;
    const map = new mapboxgl.Map({
      container: 'albuns-map',
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-58.850253, -14.783219],
      zoom: 2.5

    });

    albuns.forEach((album) => {
      new mapboxgl.Marker()
        .setLngLat([album.localizacao.longitude, album.localizacao.latitude])
        .addTo(map);
    });
  }, [albuns])

  return (
    <div className="container py-5">
      <div id='albuns-map' style={{height: "600px"}}></div>
    </div>
  )
}