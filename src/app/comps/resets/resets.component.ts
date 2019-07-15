import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resets',
  templateUrl: './resets.component.html',
  styleUrls: ['./resets.component.css']
})
export class ResetsComponent implements OnInit {
  @Input() saveEmmiter:EventEmitter<null> 
  @Output() resetInputsOut:EventEmitter<null> = new EventEmitter<null>()
  @Output() resetTableOut:EventEmitter<null>  = new EventEmitter<null>()

  constructor() { }

  ngOnInit() {
    this.saveEmmiter.subscribe(()=>{
      let $div = document.getElementById('bbqDad')
      $div.style.display="block"
      setTimeout(()=> $div.style.display="", 1500)
    })
  }

  resetInputs(){ this.resetInputsOut.emit() }
  resetTable(){ this.resetTableOut.emit() }

}
