import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  counter = 0;

  person = {
    name: '',
    surname: ''
  }

  @Output('addFormMode')
  addActivity = new EventEmitter();

  setAddActivity(){
    this.addActivity.emit('addActivity');
  }

  takePart(){
    this.counter++;
    console.log(this.counter);

  }

  undoTakePart(){
    this.counter--;
    console.log(this.counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
