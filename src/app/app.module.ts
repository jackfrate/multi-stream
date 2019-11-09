import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StreamContainerComponent } from './stream-container/stream-container.component';
import { SafePipe } from './safe.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainPageComponent } from './main-page/main-page.component';
import { MatDialogModule } from '@angular/material';
import { NewStreamDialogComponent } from './new-stream-dialog/new-stream-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StreamSizeAdjusterComponent } from './stream-size-adjuster/stream-size-adjuster.component';
import { FormsModule } from '@angular/forms';


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
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewStreamDialogComponent, StreamSizeAdjusterComponent]
})
export class AppModule { }
