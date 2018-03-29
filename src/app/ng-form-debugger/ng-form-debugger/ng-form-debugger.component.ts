import {Component, Input, OnInit, AfterContentChecked} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'form[ngFormDebugger]',
  templateUrl: './ng-form-debugger.component.html',
  styleUrls: ['./ng-form-debugger.component.css']
})
export class NgFormDebuggerComponent implements OnInit, AfterContentChecked {

  @Input('ngFormDebugger')
  form: any;

  controlKeys: string[];
  controls: AbstractControl[];

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterContentChecked() {
    let keys: string[] = [];
    for (let key in this.form.controls) {
      keys.push(key);
    }
    this.controlKeys = keys;
  }

  logForm() {
    console.log(this.form);
  }

}
