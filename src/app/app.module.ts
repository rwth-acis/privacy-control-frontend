import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OAuthModule} from "angular-oauth2-oidc";

import {AppComponent} from './app.component';
import {ConsentOverviewComponent} from './consent-overview/consent-overview.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConsentCourseComponent} from './consent-course/consent-course.component';
import {WelcomeScreenComponent} from './welcome-screen/welcome-screen.component';
import {PurposeOverviewComponent} from './purpose-overview/purpose-overview.component';
import {PurposeDetailComponent} from './purpose-detail/purpose-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PurposeCreateComponent} from './purpose-create/purpose-create.component';
import {ManagerOverviewComponent} from './manager-overview/manager-overview.component';
import {CourseCreateComponent} from './course-create/course-create.component';
import {InviteStudentComponent} from './invite-student/invite-student.component';
import {CourseStudentsComponent} from './course-students/course-students.component';
import {PurposeCourseComponent} from './purpose-course/purpose-course.component';
import {DpoOverviewComponent} from './dpo-overview/dpo-overview.component';
import {OidcInterceptor} from "./oidc.interceptor";
import {CollectedDataComponent} from './collected-data/collected-data.component';


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
    ManagerOverviewComponent,
    CourseCreateComponent,
    InviteStudentComponent,
    CourseStudentsComponent,
    PurposeCourseComponent,
    DpoOverviewComponent,
    CollectedDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: WelcomeScreenComponent},
      {path: 'consent', component: ConsentOverviewComponent},
      {path: 'consent/:serviceID/:courseID', component: ConsentCourseComponent},
      {path: 'collected-data/:serviceID/:courseID', component: CollectedDataComponent},
      {path: 'purposes', component: PurposeOverviewComponent},
      {path: 'purposes/create', component: PurposeCreateComponent},
      {path: 'purposes/:purposeID', component: PurposeDetailComponent},
      {path: 'purpose/:serviceID/:courseID', component: PurposeCourseComponent},
      {path: 'manager', component: ManagerOverviewComponent},
      {path: 'service/:serviceID/course/create', component: CourseCreateComponent},
      {path: 'service/:serviceID/course/:courseID', component: CourseCreateComponent},
      {path: 'service/:serviceID/course/:courseID/students', component: InviteStudentComponent},
      {path: 'dpo', component: DpoOverviewComponent},
    ]),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: OidcInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
