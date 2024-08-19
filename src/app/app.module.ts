import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BranchComponent } from './branch/branch.component';
import { ScrollComponent } from './scroll/scroll.component';
import { StashComponent } from './stash/stash.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BranchComponent,
    ScrollComponent,
    StashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
