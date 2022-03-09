import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css'],
  animations: [
    trigger(
      'inOutStreamer',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            
            animate('2s ease-in', style({ opacity: 1 }))

          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 0 }),
            

          ]
        )
      ]
    )
  ]
})
export class StreamersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  streamers: any
  index = 0
  displaySolo = false

  ngOnInit(): void {
    this.http.get('../../assets/streamers.json').subscribe(data => {
      this.streamers = data
    })
  }

  previous() {
    if (this.index == 0) {
      this.index = this.streamers.length - 1
    } else {
      this.index--
    }
    console.log(this.index)
  }

  next() {
    if (this.index == this.streamers.length - 1) {
      this.index = 0
    } else {
      this.index++
    }
    console.log(this.index)
  }

  setIndex(index: number) {
    this.index = index;
    this.displaySolo = true;
  }

  backToGroup()
  {
    this.displaySolo = false;
  }
}
