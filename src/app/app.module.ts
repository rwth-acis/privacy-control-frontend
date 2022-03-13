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
import { PurposeDetailComponent } from './purpose-detail/purpose-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PurposeCreateComponent } from './purpose-create/purpose-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentOverviewComponent,
    TopBarComponent,
    ConsentCourseComponent,
    WelcomeScreenComponent,
    PurposeOverviewComponent,
    PurposeDetailComponent,
    PurposeCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeScreenComponent},
      {path: 'consent', component: ConsentOverviewComponent},
      {path: 'consent/:serviceID/:courseID', component: ConsentCourseComponent},
      {path: 'purposes', component: PurposeOverviewComponent},
      {path: 'purposes/create', component: PurposeCreateComponent},
      {path: 'purposes/:purposeID', component: PurposeDetailComponent},
    ]),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
