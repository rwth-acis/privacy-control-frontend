import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userName: string | undefined;

  constructor(private oauthService: OAuthService) {
  }

  ngOnInit(): void {
    if (this.loggedIn) {
      let claims = this.oauthService.getIdentityClaims();
      if (claims) {
        // @ts-ignore
        this.userName = claims['given_name'];
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
