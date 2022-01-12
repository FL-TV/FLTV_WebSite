import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer ) { }

  url = "https://api.twitch.tv/helix/clips?broadcaster_id=737404029"
  
  headers = { 
    'Client-Id': 'gmoua84o7ri07ene1n5wma4mn35z5s',
    'Authorization' : 'Bearer gfxrobiw61o6cy2qahb6o1u2p1sgu9'
  }
  
  clips: any = []

  ngOnInit(): void {

    this.http.get(this.url, {headers:this.headers}).subscribe((data : any) => {
      //console.log(data.data)
      this.clips = data.data
      console.log(this.clips)
    })

  }


  sanitizeURL(url : string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
