import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BranchComponent } from './branch/branch.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BranchComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
