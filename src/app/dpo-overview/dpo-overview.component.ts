import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Manager} from "../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

enum Status {
  OFFLINE,
  AVAILABLE,
  INITIALISED
}

interface InitResponse {
  initialised: boolean
}

@Component({
  selector: 'app-dpo-overview',
  templateUrl: './dpo-overview.component.html',
  styleUrls: ['./dpo-overview.component.css']
})
export class DpoOverviewComponent implements OnInit {
  pcsStatus: Status = Status.OFFLINE;
  managers: Manager[] | undefined;
  addManagerForm!: FormGroup;
  amfSubmitted = false;
  addServiceManagerID: string | undefined;
  addServiceServiceID: string | undefined;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    let url = environment.urlInit;
    this.http.get<InitResponse>(url).subscribe(
      data => {
        if (data.initialised) {
          this.pcsStatus = Status.INITIALISED;
        } else {
          this.pcsStatus = Status.AVAILABLE;
        }
      },
      error => {
        this.pcsStatus = Status.OFFLINE
      })

    url = environment.urlAllManagers;
    this.http.get<Manager[]>(url).subscribe(data => {
      this.managers = data;
    })

    this.addManagerForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onInit() {
    let url = environment.urlInit;
    this.http.post(url, null, {responseType: "text"}).subscribe(data => {
      window.alert(data);
    })
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  //TODO: List all available services from registry.
  openService(content: any, managerID: string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title-service'});
    this.addServiceManagerID = managerID;
  }

  get amf() {
    return this.addManagerForm.controls;
  }

  changeServiceID(e: any) {
    this.addServiceServiceID = e.target.value;
    console.log(e.target.value);
  }

  onAMFSubmit() {
    this.amfSubmitted = true;
    if (this.addManagerForm.valid) {
      let manager = {
        name: this.addManagerForm.get('name')?.value,
        email: this.addManagerForm.get('email')?.value,
      }

      let url = environment.urlManagerCreate;
      this.http.post(url, manager, {responseType: "text"}).subscribe({
        next: data => {
          console.log("Success!");
        },
        error: error => {
          console.error('Error submitting manager form.', error);
        }
      });

      this.modalService.dismissAll();
      this.amfSubmitted = false;
    }
  }

  onAddServiceConfirm() {
    if (!(this.addServiceServiceID === undefined) && !(this.addServiceManagerID === undefined)) {
      let service = {
        id: this.addServiceServiceID,
        managerID: this.addServiceManagerID
      }

      let url = environment.urlServiceCreate;
      this.http.post(url, service, {responseType: "text"}).subscribe({
        next: data => {
          console.log("Success!");
        },
        error: error => {
          console.error('Error submitting service form.', error);
        }
      })
      this.modalService.dismissAll();
    }
  }
}
