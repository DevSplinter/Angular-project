import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  @Output('resetMode')
  reset = new EventEmitter();

  @Input()
  addFormMode

resetMode(){
  this.reset.emit('reset');
}



  constructor() { }

  ngOnInit() {
  }

}
