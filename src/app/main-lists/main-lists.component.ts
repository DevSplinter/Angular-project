import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lists',
  templateUrl: './main-lists.component.html',
  styleUrls: ['./main-lists.component.css']
})
export class MainListsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mode = 'search';

setMode(event){
  if(this.mode != event)
  this.mode = event;
}
}
