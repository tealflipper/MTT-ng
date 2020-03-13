import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StartComponent } from './start/start.component';
import { KnowmoreComponent } from './knowmore/knowmore.component';
import { IntervalsComponent } from './intervals/intervals.component';
import { CoursesComponent } from './courses/courses.component';
import { MoreComponent } from './more/more.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StartComponent,
    KnowmoreComponent,
    IntervalsComponent,
    CoursesComponent,
    MoreComponent,
    SidebarComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
