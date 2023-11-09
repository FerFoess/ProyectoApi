import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-you',
  templateUrl: './you.component.html',
  styleUrls: ['./you.component.css']
})
export class YouComponent implements OnInit {
  
  misVideos: any[] = [];
  videoId:string='';
  

  constructor(private _youtube: YoutubeService) {
    this._youtube.obtenerVideos().subscribe((resp: any) => {
      this.misVideos = resp.items;
      console.log(this.misVideos);
    });
  }

  ngOnInit() {
  }

  detalleVideo(detalle: string) {
    console.log(detalle);
    this.videoId = detalle;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoId; 
    $('#exampleModal').modal('hide');
  }
}
