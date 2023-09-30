import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from 'src/components/watch-list/watch-list.component';
import { RequestFormComponent } from 'src/components/request-form/request-form.component';
import { CheckNameDirective } from 'src/components/watch-list/name-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    RequestFormComponent,
    CheckNameDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
