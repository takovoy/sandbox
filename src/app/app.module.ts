import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ExcessorPirate} from 'excessor-pirate';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LibModule} from '../lib/lib.module';
import {GameModule} from './main/game.module/game.module';
import {DOMEventsService} from 'src/services/DOMEvents.service';
import {AnimationService} from 'src/services/Animation.service';
import {FieldNavigationService} from 'src/services/FieldNavigation.service';

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
    {
      provide: 'timeoutManager',
      useValue: new ExcessorPirate.Pirate(24),
    },
    AnimationService,
    FieldNavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
