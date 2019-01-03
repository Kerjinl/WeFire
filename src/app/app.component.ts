import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  childText = 'initDta';

  middleValue = '2133';
  i = 0;
  inp = '';

  ngOnInit() {
    window.onblur = () => {
      console.log('失去焦点啦！！！！');
    };
    window.onfocus = () => {
      console.log('焦点持续中', this.i++);
    };
    $('#tab').css('border', '1px solid #000');
    const ob = Observable.fromEvent(document.getElementById('tab'), 'click');
    ob.subscribe( (resp: any) => {
      $(resp.target).css({'background-color': 'pink', 'color': 'lightblue'});
    });
    const time = setInterval(() => {
      this.i++;
      if (this.i > 10) {
        clearInterval(time);
        console.log('结束了', this.i);
      }
    }, 1000);
  }

  sub() {
    this.middleValue = this.inp; console.log(this.middleValue);
  }

  putText(t: string) {
    this.childText = t;
  }

}
