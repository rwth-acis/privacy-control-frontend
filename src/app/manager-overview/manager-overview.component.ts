import {Component, OnInit} from '@angular/core';
import {Service} from "../model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-manager-overview',
  templateUrl: './manager-overview.component.html',
  styleUrls: ['./manager-overview.component.css']
})
export class ManagerOverviewComponent implements OnInit {
  services: Service[] | undefined;

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    // TODO: Replace with logged-in user.
    this.http.get<Service[]>(environment.urlManagerOverview + "manager@test.com" + "/services").subscribe(data => {
      this.services = data;
    })
  }

}
