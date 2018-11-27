import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hanshin',
  templateUrl: './hanshin.component.html',
  styleUrls: ['./hanshin.component.scss']
})
export class HanshinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert(){
    alert('111')
  }

}
