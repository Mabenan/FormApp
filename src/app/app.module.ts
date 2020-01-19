import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WufooFormComponent } from './wufoo-form/wufoo-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { EntryIDFilter } from './filter/EntryIDFilter';
import { FormsModule } from '@angular/forms';
import { ErrorFilterPipe } from './pipes/errorFilter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    WufooFormComponent,
    EntryIDFilter,
    ErrorFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
