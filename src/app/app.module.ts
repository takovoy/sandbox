import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LibModule} from '../lib/lib.module';
import {GameModule} from './main/game.module/game.module';
import {DOMEventsService} from 'src/services/DOMEvents.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule,
    GameModule,
  ],
  providers: [
    DOMEventsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
