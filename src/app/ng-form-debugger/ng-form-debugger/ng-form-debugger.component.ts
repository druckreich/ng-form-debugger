import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form[ngFormDebugger]',
  templateUrl: './ng-form-debugger.component.html',
  styleUrls: ['./ng-form-debugger.component.css']
})
export class NgFormDebuggerComponent implements OnInit {

  @Input()
  form: any;

  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit', this.form);
  }

}
