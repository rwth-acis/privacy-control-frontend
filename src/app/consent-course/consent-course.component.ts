import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Purpose} from "../model";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-consent-course',
  templateUrl: './consent-course.component.html',
  styleUrls: ['./consent-course.component.css']
})
export class ConsentCourseComponent implements OnInit {
  serviceID!: Number;
  courseID!: Number;
  purposes!: Purpose[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      this.serviceID = +params['serviceID'];
      this.courseID = +params['courseID'];
    })
  }

  ngOnInit(): void {
    let url = environment.urlPurposeList;
    this.http.get<Purpose[]>(url).subscribe(data => {
      this.purposes = data;
    })
  }

  onSave() {
    for (let purpose of this.purposes) {
      let flexSwitch: HTMLInputElement = <HTMLInputElement>document.getElementById('purpose' + purpose.id);
      if (flexSwitch?.checked) {
        let url = environment.urlPurposeInCourseCreate + purpose.id + '/' + this.serviceID + '/' + this.courseID;
        this.http.post(url, null).subscribe({
          next: data => {
            console.log("Success!");
          },
          error: error => {
            console.error('Error submitting purpose in course form.', error);
          }
        })
      }
    }

  }

}
