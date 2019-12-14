import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamContainerComponent } from './stream-container/stream-container.component';
import { SafePipe } from './safe.pipe';
import { MainPageComponent } from './main-page/main-page.component';
import { NewStreamDialogComponent } from './new-stream-dialog/new-stream-dialog.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { StreamSizeAdjusterComponent } from './stream-size-adjuster/stream-size-adjuster.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';


// TODO: need to make a separate module for material stuff

@NgModule({
  declarations: [
    AppComponent,
    StreamContainerComponent,
    MainPageComponent,
    SafePipe,
    NewStreamDialogComponent,
    ChatViewComponent,
    StreamSizeAdjusterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewStreamDialogComponent, StreamSizeAdjusterComponent]
})
export class AppModule { }
