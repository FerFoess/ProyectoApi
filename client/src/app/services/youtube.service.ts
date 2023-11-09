import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url:string="https://www.googleapis.com/youtube/v3";
  private apikey:string="AIzaSyDEqsrnjGEcufhXiYJ-2HDE744JUyYybrg";
  private canalId:string="UC5aD8RBROQYeDSIX54hjwBw";

 

  constructor(private _http:HttpClient) { }

  obtenerVideos(){
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canalId).set('maxResults', '10').set('order','date').set('key', this.apikey);
    let url = `${this.url}/search`;
    return this._http.get(url,{params:parametros}).pipe(map(resp => resp));
  
  }

}

