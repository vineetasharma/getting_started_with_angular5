import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: object;
  @Input() onDelete: any;
  @Input() onEdit: any;

  constructor() { }

  ngOnInit() {
  }

}
