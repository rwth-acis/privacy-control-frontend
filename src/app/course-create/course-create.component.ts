import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

interface Course {
  id: String,
  serviceID: String,
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
  course!: Course;


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

    if (this.isEditMode) {
      let url = environment.urlRoot + "service/" + this.serviceID + "/course/" + this.routeCourseID;
      this.http.get<Course>(url).subscribe(data => {
        this.course = data;
        this.form = this.formBuilder.group({
          courseID: [{
            value: this.routeCourseID,
            disabled: true
          }, [Validators.required, Validators.pattern("^[0-9]*$")]],
          courseName: [this.course.name, Validators.required],
          courseDescription: [this.course.description]
        })
      })
    } else {
      this.form = this.formBuilder.group({
        courseID: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
        courseName: ['', Validators.required],
        courseDescription: ['']
      })
    }
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      let msgText: string;
      if (this.isEditMode) {
        msgText = "Please confirm you wish to edit this course."
      } else {
        msgText = "Please confirm you wish to register this course."
      }

      if (confirm(msgText)) {
        let id = this.form.get('courseID')?.value;
        let name = this.form.get('courseName')?.value;
        let desc = this.form.get('courseDescription')?.value;
        let newCourse: Course = {
          id: id,
          name: name,
          description: desc,
          serviceID: this.serviceID.toString()
        }

        if (this.isEditMode) {
          let url = environment.urlRoot + "service/" + this.serviceID + "/course/" + this.routeCourseID;
          this.http.put<Course>(url, newCourse).subscribe({
            next: data => {
              console.log("Success!");
            },
            error: error => {
              console.error('Error submitting course form.', error);
            }
          });
        } else {
          this.http.post<Course>(environment.urlCourseCreate, newCourse).subscribe({
            next: data => {
              console.log("Success!");
            },
            error: error => {
              console.error('Error submitting course form.', error);
            }
          })
        }

        this.router.navigate(['/manager']);
      }
    }
  }
}
