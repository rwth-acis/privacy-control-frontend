import {Component} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'privacy-control-service-frontend';

  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authCodeFlowConfig);

    this.oauthService.loadDiscoveryDocumentAndTryLogin({
      onTokenReceived: info => {
        console.log('anything')
        console.log(info.accessToken);
      }
    });

    //this.oauthService.setupAutomaticSilentRefresh();

  }
}
