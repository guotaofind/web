import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { DecompositionModule } from './decomposition/decomposition.module';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { requestOptionsProvider } from './default-request-options.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DecompositionModule,
    ButtonModule
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
