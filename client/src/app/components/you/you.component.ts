import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './you.component.html',
  styleUrls: ['./you.component.css']
})
export class YouComponent implements OnInit {
  misVideos:any[]=[];
  videoId: string='';


  constructor(private _youtube:YoutubeService) { 
    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      console.log(resp);
      this.misVideos = resp.items;
  
    });
  }

  ngOnInit() {
  }

  detalleVideo(a:string){
    console.log(a);
   this.videoId=a;
   $('#exampleModal').modal();
    
  }

  cerrarModal(){
    this.videoId='';
    $('#exampleModal').modal('hide');
  }

}

