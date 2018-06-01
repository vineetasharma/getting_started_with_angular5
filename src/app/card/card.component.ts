import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  // selector: 'app-new-card-input',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  host: {'class': 'col-4'}
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
