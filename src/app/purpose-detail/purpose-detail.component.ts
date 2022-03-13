import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {Purpose} from "../purpose";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-purpose-detail',
  templateUrl: './purpose-detail.component.html',
  styleUrls: ['./purpose-detail.component.css']
})
export class PurposeDetailComponent implements OnInit {
  purpose: Purpose | undefined;
  purposeForm: FormGroup | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const purposeID = Number(routeParams.get('purposeID'));

    this.http.get<Purpose>(environment.urlPurposeList + purposeID).subscribe(data => {
      this.purpose = data;
    })

    this.purposeForm = new FormGroup({
      id: new FormControl(this.purpose?.id, [Validators.required, Validators.pattern("^[0-9]*$")],),
      title: new FormControl(this.purpose?.title, [Validators.required]),
      description: new FormControl(this.purpose?.description, [Validators.required]),
    });

    this.purposeForm.controls['id'].disable();
  }

  get id() {
    return this.purposeForm?.get('id');
  }

  get title() {
    return this.purposeForm?.get('title');
  }

  get description() {
    return this.purposeForm?.get('description');
  }

  onSubmit() {
    if (this.purposeForm?.valid) {
      if (confirm("Please confirm that you wish to modify this purpose." +
        "\n It might take a while to make this happen.")) {
        if (this.purpose) {
          if (this.purposeForm?.get('title')?.value != '') {
            this.purpose.title = this.purposeForm?.get('title')?.value;
          }
          if (this.purposeForm?.get('description')?.value != '') {
            this.purpose.description = this.purposeForm?.get('description')?.value;
          }
          this.http.post<Purpose>(environment.urlPurposeList, this.purpose).subscribe({
            next: data => {
              console.log("Success!");
            },
            error: error => {
              console.error('Error submitting purpose form.', error);
            }
          })
        }
      }
    }
  }
}
