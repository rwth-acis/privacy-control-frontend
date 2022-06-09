import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

interface Entry {
  verb: string,
  object: string,
  timestamp: string,
  statement: object
}

@Component({
  selector: 'app-collected-data',
  templateUrl: './collected-data.component.html',
  styleUrls: ['./collected-data.component.css']
})
export class CollectedDataComponent implements OnInit {
  entries: Entry[] | undefined;

  constructor(
    private http: HttpClient,
    private oauth: OAuthService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const serviceID = routeParams.get('serviceID');
    const courseID = routeParams.get('courseID');

    // TODO: Add verified info
    let claims = this.oauth.getIdentityClaims();
    if (claims) {
      // @ts-ignore
      let userID = claims['email'];
      let url = environment.urlCollectedData + serviceID + '/' + courseID;
      this.http.get<Entry[]>(url).subscribe(data => {
        this.entries = data;
      })
    }
  }

}
