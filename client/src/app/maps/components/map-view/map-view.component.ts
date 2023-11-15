import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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

  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placesServices.useLocation) throw Error('No hay placesService.userLocation');

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesServices.useLocation,
      zoom: 9 // starting zoom
    });

    const popup = new mapboxgl.Popup()
      .setHTML(`
        <h6> Yoo </h6>
        <span> Estoy en este lugar </span>
      `);

    new mapboxgl.Marker({ color: 'red' })
      .setLngLat(this.placesServices.useLocation)
      .setPopup(popup)
      .addTo(map);

      this.mapService.setMap( map );
  }
}
