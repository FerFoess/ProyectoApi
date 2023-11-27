import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number,number];

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor(private http: HttpClient) {
    this.getUserLocation();
  }
  

  public async getUserLocation(): Promise<[number,number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          console.error('Error obteniendo la ubicación:', err);
          reject('No se pudo obtener la ubicación del usuario.');
        }
      );
    });
  }

  
}