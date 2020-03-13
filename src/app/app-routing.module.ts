import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { CoursesComponent } from './courses/courses.component';
import { MoreComponent } from './more/more.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'start',component: StartComponent},
  {path: 'knowmore', component: KnowmoreComponent},
  {path: 'intervals', component: IntervalsComponent},
  {path: 'courses', component: CoursesComponent},
  { path: 'more', component: MoreComponent},
  { path: 'manage', component: AdminComponent },
  { path: '**', component: StartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

