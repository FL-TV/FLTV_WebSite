import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger(
      'inOutFooter',
      [
        transition(
          ':enter',
          [
            // style({  opacity: 0 }),
            // animate('1s ease-out', style({  opacity: 1 }))
            style({  bottom : -100 }),
            animate('0.2s ease-out', style({  bottom :0 }))
          ]
        ),
        transition(
          ':leave',
          [
            // style({ opacity: 1 }),
            // animate('0.5s ease-in', style({  opacity: 0 }))
            style({  bottom :0}),
            animate('0.2s ease-out', style({  bottom : -100}))
          ]
        )
      ]
    )
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }
  isFooterToggled = false

  ngOnInit(): void {
  }

  toggleFooter() {
    this.isFooterToggled = !this.isFooterToggled
    console.log(this.isFooterToggled)
  }

}
