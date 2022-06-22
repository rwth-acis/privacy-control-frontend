import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userName: string | undefined;
  isDPO: boolean = false;
  isStudent: boolean = false;
  isManager: boolean = false;

  constructor(
    private oauthService: OAuthService,
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    if (this.loggedIn) {
      let claims = this.oauthService.getIdentityClaims();
      if (claims) {
        // @ts-ignore
        this.userName = claims['given_name'];

        let url = environment.urlRoles;
        this.http.get<String[]>(url).subscribe(data => {
          for (let role of data) {
            if (role === "dpo") {
              this.isDPO = true;
            }
            if (role === "manager") {
              this.isManager = true;
            }
            if (role === "student") {
              this.isStudent = true;
            }
          }
        })
      }
    }
  }

  onLoginClick() {
    if (!this.loggedIn) {
      this.oauthService.initLoginFlow();
    } else {
      this.oauthService.logOut();
    }

  }

  get loggedIn() {
    return !!this.oauthService.getAccessToken();
  }

  get username() {
    if (this.loggedIn) {
      if (this.userName) {
        return this.userName;
      }
    }
    return '';
  }
}
