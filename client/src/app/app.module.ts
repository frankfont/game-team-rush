import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { GameStatusComponent } from './components/game-status/game-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewGameComponent,
    GameStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
