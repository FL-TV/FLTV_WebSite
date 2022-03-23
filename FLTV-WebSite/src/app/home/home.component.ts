import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


    constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  
    url = "https://api.twitch.tv/helix/clips?broadcaster_id=737404029&first=3"
    
    headers = { 
      'Client-Id': 'gmoua84o7ri07ene1n5wma4mn35z5s',
      'Authorization' : 'Bearer abxtbnzl537x9edtukof7nksqons6r'
    }
    
    clips: any = []
  
    ngOnInit() {
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



