import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css']
})
export class StreamersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  streamers : any
  index = 0

  ngOnInit(): void {
    this.http.get('../../assets/streamers.json').subscribe(data =>{
      this.streamers = data
    })
  }

  previous() {
    if (this.index == 0) {
      this.index = this.streamers.length -1
    } else {
      this.index --
    }
    console.log(this.index)
  }

  next() {
    if (this.index == this.streamers.length -1) {
      this.index = 0
    } else {
      this.index ++
    } 
    console.log(this.index)
  }

}
