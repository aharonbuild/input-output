import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit  {

  @Output() fnameOut:EventEmitter<string> = new EventEmitter<string>()
  @Output() lnameOut:EventEmitter<string> = new EventEmitter<string>()
  @Output() ageOut:EventEmitter<number> = new EventEmitter<number>()
  @Output() colorOut:EventEmitter<string> = new EventEmitter<string>()
  @Output() saveRowOut:EventEmitter<null> = new EventEmitter<null>()

  fnameChange(v:string){ this.fnameOut.emit(v); }
  lnameChange(v:string){ this.lnameOut.emit(v); }
  ageChange(v:number){ this.ageOut.emit(v); }
  colorChange(v:string){ this.colorOut.emit(v); }
  saveRow(){ 
    this.saveRowOut.emit(); 
    this.resetInputs()
  }

  @Input() inputsRST:EventEmitter<null> 

  ngOnInit(){
    this.inputsRST.subscribe(()=>{
      this.resetInputs()
    })
  }

  private resetInputs(){
    document.getElementsByTagName('app-inputs')[0]
    .querySelectorAll('input')
    .forEach(e => e.value = '')
  }

}
