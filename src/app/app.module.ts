import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {ConsentOverviewComponent} from './consent-overview/consent-overview.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConsentCourseComponent} from './consent-course/consent-course.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {PurposeOverviewComponent} from './purpose-overview/purpose-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentOverviewComponent,
    TopBarComponent,
    ConsentCourseComponent,
    WelcomeScreenComponent,
    PurposeOverviewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeScreenComponent},
      {path: 'consent-overview', component: ConsentOverviewComponent},
      {path: 'consent-course/:serviceID/:courseID', component: ConsentCourseComponent},
      {path: 'purpose-overview', component: PurposeOverviewComponent}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
