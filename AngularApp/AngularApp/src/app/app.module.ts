import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DetailsComponent } from './details/details.component'


@NgModule({
   declarations: [
       AppComponent,
       DetailsComponent,
      
   ],
   imports: [
      BrowserModule,
      FormsModule,
       HttpModule
      
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }