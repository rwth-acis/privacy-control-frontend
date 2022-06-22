import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service} from "../model";
import {environment} from "../../environments/environment";
import {OAuthService} from "angular-oauth2-oidc";


@Component({
  selector: 'app-consent-overview',
  templateUrl: './consent-overview.component.html',
  styleUrls: ['./consent-overview.component.css']
})
export class ConsentOverviewComponent implements OnInit {
  services: Service[] | undefined;

  constructor(
    private http: HttpClient,
    private oauth: OAuthService
  ) {
  }

  ngOnInit(): void {
    let claims = this.oauth.getIdentityClaims();
    if (claims) {
      // @ts-ignore
      let email = claims['email'];
      this.http.get<Service[]>(environment.urlConsentOverview + email).subscribe(data => {
        this.services = data;
      })
    }
  }

}
