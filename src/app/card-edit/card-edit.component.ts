import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-edit',
  // selector: 'app-new-card-input',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css'],
})
export class CardEditComponent implements OnInit {

  eitingCard = 'My first Editing Card!!!';

  submit = () => {
    alert('submitted!!');
  }

  constructor() { }

  ngOnInit() {
  }

}
