import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamSelectComponent } from './stream-select/stream-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamContainerComponent } from './stream-container/stream-container.component';
import { SafePipe } from './safe.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule } from "@angular/material";
import { NewStreamDialogComponent } from './new-stream-dialog/new-stream-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    StreamSelectComponent,
    StreamContainerComponent,
    MainPageComponent,
    SafePipe,
    NewStreamDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewStreamDialogComponent]
})
export class AppModule { }
