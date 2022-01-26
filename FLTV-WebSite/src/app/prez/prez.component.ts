import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prez',
  templateUrl: './prez.component.html',
  styleUrls: ['./prez.component.css']
})
export class PrezComponent implements OnInit {

  constructor(private http: HttpClient) { }

  poles : any
  index = 0

  ngOnInit(): void {
    this.http.get('../../assets/prez.json').subscribe(data =>{
      this.poles = data
    })
  }

  previous() {
    if (this.index == 0) {
      this.index = this.poles.length -1
    } else {
      this.index --
    }
    console.log(this.index)
  }

  next() {
    if (this.index == this.poles.length -1) {
      this.index = 0
    } else {
      this.index ++
    } 
    console.log(this.index)
  }

}
