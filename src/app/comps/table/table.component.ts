import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TableItem } from 'src/app/model/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  @Input() saveEmmiter:EventEmitter<null> 
  @Input() tableRST:EventEmitter<null> 
  @Input() newItem:TableItem
  items:TableItem[]

  @Output('BBQ') callDadyUWantBBQ:EventEmitter<null> = new EventEmitter<null>()

  constructor() { 
    this.newItem = new TableItem()
    this.items = []
  }

  ngOnInit(){
    this.saveEmmiter.subscribe(()=>{
      console.log('TableComponent.saveEmmiter fire ');
      this.saveNewRow();
    })
    //this.saveEmmiter.subscribe(this.saveNewRow.bind(this))
    this.tableRST.subscribe(()=>{
      console.log('TableComponent.tableRST');
      
      this.items = []
      this.newItem = new TableItem()
    })
  }

  saveNewRow() {
    this.items.unshift(this.newItem)
    this.newItem = new TableItem()
  }

  SmitBBQ(){
    this.callDadyUWantBBQ.emit()
  }
}
