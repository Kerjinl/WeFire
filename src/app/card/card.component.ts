import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';

import { TableConfig, D_Table } from './card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() AddText : string;
  @Output() testWord = new EventEmitter();

  text: string = '';

  constructor(

  ) { }

  ngOnInit() {
   
  }

  textSubmit(){

  }

  onTansport(){
    this.testWord.emit(this.text)
  }

}
