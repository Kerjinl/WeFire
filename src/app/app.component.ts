import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  childText: string = 'initDta';

  middleValue = '2133';

  inp = '';

  ngOnInit(){

  }

  sub(){
    
    this.middleValue = this.inp;console.log(this.middleValue)
  }

  putText(t: string){
    this.childText = t;
  }

}
