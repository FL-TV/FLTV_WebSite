import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PrezComponent } from './prez/prez.component';
import { StreamersComponent } from './streamers/streamers.component';
import { PlanningComponent } from './planning/planning.component';
import { ClipsComponent } from './clips/clips.component';
import { VodsComponent } from './vods/vods.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PrezComponent,
    StreamersComponent,
    PlanningComponent,
    ClipsComponent,
    VodsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
