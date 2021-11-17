import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PrezComponent } from './prez/prez.component';
import { StreamersComponent } from './streamers/streamers.component';
import { PlanningComponent } from './planning/planning.component';
import { ClipsComponent } from './clips/clips.component';
import { VodsComponent } from './vods/vods.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PrezComponent,
    StreamersComponent,
    PlanningComponent,
    ClipsComponent,
    VodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
