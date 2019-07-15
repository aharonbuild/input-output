import { Component, EventEmitter } from '@angular/core';
import { TableItem } from './model/table-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw';
  tellTableToSaveEmmiter:EventEmitter<null> = new EventEmitter<null>()
  tellResetBBQ:EventEmitter<null> = new EventEmitter<null>()

  theNewItem:TableItem
  tableRST:EventEmitter<null> = new EventEmitter<null>()
  inputsRST:EventEmitter<null> = new EventEmitter<null>()
  tableRSTfn(){ 
    console.log('AppComponent.tableRSTfn');
    
    this.theNewItem = new TableItem()
    this.tableRST.emit() 
  }
  inputsRSTfn(){ this.inputsRST.emit() }

  constructor() {
    this.theNewItem = new TableItem()
  }

  tellTableToSave(){
    this.tellTableToSaveEmmiter.emit()
    this.theNewItem = new TableItem()
  }

  BBQ(){
    this.tellResetBBQ.emit()
  }
}
