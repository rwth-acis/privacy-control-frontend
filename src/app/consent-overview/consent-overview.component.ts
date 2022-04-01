import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from "../model";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-consent-overview',
  templateUrl: './consent-overview.component.html',
  styleUrls: ['./consent-overview.component.css']
})
export class ConsentOverviewComponent implements OnInit {
  services: Service[] | undefined;

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    // TODO: Replace with logged-in user.
    this.http.get<Service[]>(environment.urlConsentOverview + "student1").subscribe(data => {
      this.services = data;
    })
  }

}
