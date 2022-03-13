import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {Purpose} from "../purpose";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-purpose-create',
  templateUrl: './purpose-create.component.html',
  styleUrls: ['./purpose-create.component.css']
})
export class PurposeCreateComponent implements OnInit {
  purpose: Purpose;
  purposeForm: FormGroup;

  constructor(
    private http: HttpClient
  ) {
    this.purpose = {
      id: -1,
      title: '',
      description: '',
      version: 0
    };
    this.purposeForm = new FormGroup({
      id: new FormControl( null, [Validators.required, Validators.pattern("^[0-9]*$")]),
      title: new FormControl(null,[Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
    this.purposeForm.markAsPristine();
  }

  ngOnInit(): void {
  }

  get id() {
    return this.purposeForm.get('id');
  }

  get title() {
    return this.purposeForm.get('title');
  }

  get description() {
    return this.purposeForm.get('description');
  }

  onSubmit() {
    if (this.purposeForm.valid) {
      if (confirm("Please confirm that you wish to create this purpose." +
        "\n It might take a while to make this happen.")) {
        this.purpose.id = this.purposeForm.get('id')?.value;
        this.purpose.title = this.purposeForm.get('title')?.value;
        this.purpose.description = this.purposeForm.get('description')?.value;

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
