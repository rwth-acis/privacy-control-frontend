import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OAuthService} from "angular-oauth2-oidc";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

interface Entry {
  verb: string,
  object: string,
  timestamp: string,
  statement: object,
  verified: boolean,
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
    private route: ActivatedRoute,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const serviceID = routeParams.get('serviceID');
    const courseID = routeParams.get('courseID');

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

  open(content: any) {
    this.modalService.open(content, {centered: true});
  }

  deleteCollectedData() {
    if (confirm("Are you sure you want all of your collected data for this course to be deleted? " +
      "WARNING: This cannot be reversed.")) {
      const routeParams = this.route.snapshot.paramMap;
      const serviceID = routeParams.get('serviceID');
      const courseID = routeParams.get('courseID');
      let url = environment.urlCollectedData + serviceID + '/' + courseID;
      this.http.delete(url).subscribe();
    }
  }

}
