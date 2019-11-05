import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamSelectComponent } from './stream-select/stream-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamContainerComponent } from './stream-container/stream-container.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StreamSelectComponent,
    StreamContainerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
