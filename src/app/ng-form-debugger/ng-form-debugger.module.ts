import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgFormDebuggerComponent} from './ng-form-debugger/ng-form-debugger.component';
import {NgModalComponent} from './ng-modal/ng-modal.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgModalComponent,
    NgFormDebuggerComponent
  ],
  exports: [
    NgModalComponent,
    NgFormDebuggerComponent
  ]
})
export class NgFormDebuggerModule {
}
