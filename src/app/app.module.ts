import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainListsComponent } from './main-lists/main-lists.component';
import { SearchListComponent } from './main-lists/search-list/search-list.component';
import { ActivitiesListComponent } from './main-lists/activities-list/activities-list.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { AddNewComponent } from './add-new/add-new.component';


@NgModule({
  declarations: [
    AppComponent,
    MainListsComponent,
    SearchListComponent,
    ActivitiesListComponent,
    ListDetailsComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
