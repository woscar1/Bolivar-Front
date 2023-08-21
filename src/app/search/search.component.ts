import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class RegistroComponent implements OnInit {

  model: any = {}
  panel= false;
  listsSpoty: any;
  albums: any;
  tracks: any;
  artists: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log("holl")
    this.panel= false;
    this.http.get('http://localhost:5175/api/Spotify/could').subscribe({
      next: response => {this.listsSpoty = response,
      this.albums= this.listsSpoty[0].spotifyAlbum,
      this.tracks= this.listsSpoty[0].spotifyTrack,
      this.artists=this.listsSpoty[0].spotifyArtist,
      this.panel= true,
      this.model = {}},
      error: error => console.log(error),
      complete:() => {}    
  })
  }

  buscar(){   
    this.http.get('http://localhost:5175/api/Spotify/'+this.model.spotify).subscribe({
        next: response => {this.listsSpoty = response,
        this.albums= this.listsSpoty[0].spotifyAlbum,
        this.tracks= this.listsSpoty[0].spotifyTrack,
        this.artists=this.listsSpoty[0].spotifyArtist,
        this.panel= true,
        this.model = {}},
        error: error => console.log(error),
        complete:() => {}    
    })
  }
}
