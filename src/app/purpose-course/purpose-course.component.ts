import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Purpose} from "../model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-purpose-course',
  templateUrl: './purpose-course.component.html',
  styleUrls: ['./purpose-course.component.css']
})
export class PurposeCourseComponent implements OnInit {
  serviceID!: Number;
  courseID!: Number;
  purposes!: Purpose[];
  previouslyRegisteredPurposeIDs: Number[] = [];

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router
  ) {
    this.route.params.subscribe(params => {
      this.serviceID = params['serviceID'];
      this.courseID = params['courseID'];
    })
  }

  ngOnInit(): void {
    let url = environment.urlPurposeList;
    this.http.get<Purpose[]>(url).subscribe(data => {
      this.purposes = data;
    })

    url = environment.urlPurposesInCourseGet + this.serviceID + '/' + this.courseID;
    this.http.get<Purpose[]>(url).subscribe(data => {
      for (let purpose of data) {
        this.previouslyRegisteredPurposeIDs.push(purpose.id);
      }
    })
  }

  onSave() {
    let purposeIDs : Number[] = [];
    for (let purpose of this.purposes) {
      let flexSwitch: HTMLInputElement = <HTMLInputElement>document.getElementById('purpose' + purpose.id);
      if (flexSwitch?.checked) {
        purposeIDs.push(purpose.id);
      }
    }
    let body = {
      "serviceID": this.serviceID.toString(),
      "courseID": this.courseID.toString(),
      "purposes": purposeIDs
    }
    let url = environment.urlPurposeInCourseCreate;
    this.http.post(url, body).subscribe({
      next: data => {
        console.log("Success!");
      },
      error: error => {
        console.error('Error submitting purpose in course form.', error);
      }
    })

    this.router.navigate(['/manager']);
  }

}
