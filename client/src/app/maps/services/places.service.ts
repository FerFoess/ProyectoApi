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
      
      const longitude = -100.930289;
      const latitude = 21.1673154;

      this.useLocation = [longitude, latitude];
      return this.useLocation;
        
    
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
