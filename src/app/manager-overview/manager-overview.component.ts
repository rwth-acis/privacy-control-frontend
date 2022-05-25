import {Component, OnInit} from '@angular/core';
import {Service} from "../model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-manager-overview',
  templateUrl: './manager-overview.component.html',
  styleUrls: ['./manager-overview.component.css']
})
export class ManagerOverviewComponent implements OnInit {
  services: Service[] | undefined;

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
  ) {
  }

  ngOnInit(): void {
    let claims = this.oauthService.getIdentityClaims();
    if (claims) {
      // @ts-ignore
      let userID = claims['email'];
      this.http.get<Service[]>(environment.urlManagerOverview + userID + "/services")
        .subscribe(data => {
          this.services = data;
        })
    }
  }

}
