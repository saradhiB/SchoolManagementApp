import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing';
import { HttpModule, RequestOptions, ResponseContentType } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentformComponent } from './studentform/studentform.component';
import { StudentformService } from './studentform/studentform.service';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentSearchService } from './student-search/student-search.service';
import { StudentmarksComponent } from './studentmarks/studentmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentformComponent,
    StudentSearchComponent,
    StudentmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [StudentformService,StudentSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
