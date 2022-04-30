import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Purpose} from "../model";

interface Course {
  id: Number,
  serviceID: Number,
  name: String,
  description?: String,
}

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  isEditMode!: boolean;
  form!: FormGroup;
  serviceID!: Number;
  routeCourseID!: Number;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.route.params.subscribe(params => {
      this.serviceID = +params['serviceID'];
    });
  }

  ngOnInit(): void {
    this.routeCourseID = this.route.snapshot.params['courseID'];
    this.isEditMode = !(this.routeCourseID === undefined);

    this.form = this.formBuilder.group({
      courseID: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      courseName: ['', Validators.required],
      courseDescription: ['']
    })

    if (this.isEditMode) {

    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (confirm("Please confirm you wish to register this course.")) {
        let id = this.form.get('courseID')?.value;
        let name = this.form.get('courseName')?.value;
        let desc = this.form.get('courseDescription')?.value;
        let newCourse : Course = {
          id: id,
          name: name,
          description: desc,
          serviceID: this.serviceID
        }

        this.http.post<Course>(environment.urlCourseCreate, newCourse).subscribe({
          next: data => {
            console.log("Success!");
          },
          error: error => {
            console.error('Error submitting course form.', error);
          }
        })
      }
    }
  }
}
