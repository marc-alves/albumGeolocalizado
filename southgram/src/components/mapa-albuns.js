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

    /* albuns.forEach((album) => {
      new mapboxgl.Marker()
        .setLngLat([album.localizacao.longitude, album.localizacao.latitude])
        .addTo(map);
    }); */
    if(albuns.length)
      addPointsToMap(map)
  }, [albuns])

  const addPointsToMap = (map) => {
    //const map = new mapboxgl.Map()
    map.on('load', () => {
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        (error, image) => {
        if (error) throw error;
        map.addImage('custom-marker', image);

        map.addSource('albuns', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': albuns.map( album => ({
            'type': 'Feature',
            'properties': {
              'description': `<strong>${album.titulo}</strong><p>${album.descricao}</p><a href="/album/${album.id}" target="_blank" title="Opens in a new window">Ver detalhes</a>`,
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [album.localizacao.longitude, album.localizacao.latitude]
            }
          }))
        }
        });
        // Add a layer showing the places.
        map.addLayer({
          'id': 'albuns',
          'type': 'symbol',
          'source': 'albuns',
          'layout': {
            'icon-image': 'custom-marker',
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': [
              'Open Sans Semibold',
              'Arial Unicode MS Bold'
            ],
            'text-anchor': 'top'
            }
        });
        
        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', 'albuns', (e) => {
          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;
          
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);

        });
        
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'places', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'places', () => {
          map.getCanvas().style.cursor = '';
        });
      })
    });
  }

  return (
    <div className="container py-5">
      <div id='albuns-map' style={{height: "600px"}}></div>
    </div>
  )
}