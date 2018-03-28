import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgFormDebuggerComponent} from './ng-form-debugger/ng-form-debugger.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgFormDebuggerComponent
  ],
  exports: [
    NgFormDebuggerComponent
  ]
})
export class NgFormDebuggerModule {
}
