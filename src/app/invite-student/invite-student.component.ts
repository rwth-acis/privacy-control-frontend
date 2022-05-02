import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Purpose, Student} from "../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-invite-student',
  templateUrl: './invite-student.component.html',
  styleUrls: ['./invite-student.component.css']
})
export class InviteStudentComponent implements OnInit {
  closeResult = '';
  serviceID!: Number;
  courseID!: Number;
  students!: Student[];
  inviteForm!: FormGroup;
  submitted = false;

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe(params => {
      this.serviceID = +params['serviceID'];
      this.courseID = +params['courseID'];
    })
  }

  ngOnInit(): void {
    let url = environment.urlStudentsInCourseGet + this.serviceID + '/' + this.courseID;
    this.http.get<Student[]>(url).subscribe(data => {
      this.students = data;
    })

    this.inviteForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  get f() {
    return this.inviteForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.inviteForm.valid) {
      let student: Student = {
        email: this.inviteForm.get('email')?.value
      }

      let url = environment.urlStudentsInCourseCreate + this.serviceID + '/' + this.courseID;
      this.http.post<Student>(url, student).subscribe({
        next: data => {
          console.log("Success!");
        },
        error: error => {
          console.error('Error submitting course form.', error);
        }
      });

      this.modalService.dismissAll();
      this.submitted = false;
    }
  }
}
