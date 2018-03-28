import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgFormDebuggerModule} from './ng-form-debugger/ng-form-debugger.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgFormDebuggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
