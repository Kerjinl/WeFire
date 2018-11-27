import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { TableConfig, D_Table } from './card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('tbody') tbody: ElementRef;

  d: D_Table = new D_Table();
  tableConfig = new TableConfig();

  testDataId = ['12','34'];
  testDataName = ['la','ls'];

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.tableConfig.row = [
      {
        width:'120px',name:'用户编号',id:'userID',tableData:this.testDataId
      },
      {
        width:'120px',name:'用户姓名',id:'userName',tableData:this.testDataName
      }
    ]

    //this.d.tableData.push(...this.tableConfig.row.filter(item =>{item.tableData}))
    for(let item of this.tableConfig.row){
      this.d.tableTitle.push({'id':item.id,'name':item.name})
      this.d.tableData.push(item.tableData)
    }
    // this.renderer2.appendChild(this.tbody.nativeElement,'<tr><td>1233123</td><td>1233123</td></tr>')
    // this.tbody.nativeElement.html("<tr><td>1233123</td><td>1233123</td></tr>")
    console.log(this.d)
    console.log(this.tbody.nativeElement)
    // console.log(this.d.tableData)
    // console.log(this.tableConfig.row.filter(item =>{item.tableData}))

  }

}
