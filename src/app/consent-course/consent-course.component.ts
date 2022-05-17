import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Purpose} from "../model";
import {environment} from "../../environments/environment";

interface ConsentResponse {
  userID: String,
  serviceID: String,
  courseID: String,
  purposes: Number[],
  privacyVersion: Number[],
  timestamp: Number
}

@Component({
  selector: 'app-consent-course',
  templateUrl: './consent-course.component.html',
  styleUrls: ['./consent-course.component.css']
})
export class ConsentCourseComponent implements OnInit {
  serviceID!: Number;
  courseID!: Number;
  purposes!: Purpose[];
  previouslyConsentedPurposeIDs: Number[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.serviceID = params['serviceID'];
      this.courseID = params['courseID'];
    })
  }

  ngOnInit(): void {
    let url = environment.urlPurposesInCourseGet + this.serviceID + '/' + this.courseID;
    this.http.get<Purpose[]>(url).subscribe(data => {
      this.purposes = data;
    })

    url = environment.urlConsentOverview + 'student@test.com' + '/' + this.serviceID + '/' + this.courseID;
    this.http.get<ConsentResponse>(url).subscribe(data => {
      for (let id of data.purposes) {
        this.previouslyConsentedPurposeIDs.push(id);
      }
    })
  }

  onSave() {
    if (confirm("Please confirm that this is your consent. Also note that " +
      "it might take up to a couple of minutes before your changes have been" +
      "fully saved.")) {
      let purposeIDs: Number[] = [];
      for (let purpose of this.purposes) {
        let flexSwitch: HTMLInputElement = <HTMLInputElement>document.getElementById('purpose' + purpose.id);
        if (flexSwitch?.checked) {
          purposeIDs.push(purpose.id);
        }
      }
      //TODO: Replace with login detail
      let body = {
        "studentID": "student@test.com",
        "serviceID": this.serviceID.toString(),
        "courseID": this.courseID.toString(),
        "purposes": purposeIDs
      }
      let url = environment.urlConsentOverview;
      this.http.post(url, body, {responseType: 'text'}).subscribe({
        next: data => {
          console.log(data.toString());

        },
        error: error => {
          console.error('Error submitting purpose in course form.', error);
        }
      })

      this.router.navigate(['/consent']);
    }
  }

}
