import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClipsComponent } from './clips/clips.component';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';
import { PrezComponent } from './prez/prez.component';
import { StreamersComponent } from './streamers/streamers.component';
import { VodsComponent } from './vods/vods.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'prez', component: PrezComponent},
  {path: 'streamers', component: StreamersComponent},
  {path: 'planning', component: PlanningComponent},
  {path: 'clips', component: ClipsComponent},
  {path: 'vods', component: VodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
