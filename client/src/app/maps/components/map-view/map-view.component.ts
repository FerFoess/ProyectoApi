import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') 
  mapDivElement!: ElementRef;
  markers: mapboxgl.Marker[] = [];

  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) {
      throw Error('No hay placesService.userLocation');
    }

    const mapbox = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.useLocation,
      zoom: 14
    });

    const popupDefault = new mapboxgl.Popup()
      .setHTML(`
        <h6> Aquí estoy </h6>
        <span> Este es mi lugar </span>
      `);

    const defaultCoordinates: [number, number] = [-100.9302854,21.1663086]; 

    const defaultMarker = new mapboxgl.Marker({ color: 'green' })
      .setLngLat(defaultCoordinates)
      .addTo(mapbox)
      .setPopup(popupDefault); 

    const popupBlue = new mapboxgl.Popup()
      .setHTML(`
        <h6> Aquí está el marcador azul </h6>
        <span> Este es otro lugar </span>
      `);

    const blueMarkerCoordinates: [number, number] = [this.placesService.useLocation[0], this.placesService.useLocation[1]]; // Coordenadas del marcador azul

    const blueMarker = new mapboxgl.Marker({ color: 'blue' })
      .setLngLat(blueMarkerCoordinates)
      .addTo(mapbox)
      .setPopup(popupBlue); 

    const coordinates = [
      defaultCoordinates,
      blueMarkerCoordinates
    ];


    mapbox.on('load', () => {
      mapbox.addLayer({
        id: 'line',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coordinates
            }
          }
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0000FF',
          'line-width': 4
        }
      });
    });

    this.markers.push(defaultMarker);
    this.markers.push(blueMarker);

    this.mapService.setMap(mapbox);
  }
}
