import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-vods',
  templateUrl: './vods.component.html',
  styleUrls: ['./vods.component.css']
})
export class VodsComponent implements OnInit {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  url = "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLTMQN95s6RIJSvglPk3qGqnS39p3N-Tiq&key=AIzaSyBXVykoRF-IqIflqW8iPIjwoLh7wexZnQ0";

  vods : any = [];

  ngOnInit(): void {
    this.http.get(this.url).subscribe( (data : any) => {
      this.vods = data.items;
      console.log(this.vods);
    })
  }

  sanitizeURL(url : string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
