import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitchPlayerComponent } from './twitch-player/twitch-player.component';
import { MixerPlayerComponent } from './mixer-player/mixer-player.component';
import { StreamSelectComponent } from './stream-select/stream-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TwitchPlayerComponent,
    MixerPlayerComponent,
    StreamSelectComponent
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
