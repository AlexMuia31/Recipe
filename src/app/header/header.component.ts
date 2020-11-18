import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() featureSelected = new EventEmitter<string>(); //out put helps us to listen to the below event on app.component

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  

}
