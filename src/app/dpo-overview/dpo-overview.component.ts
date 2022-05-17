import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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

  constructor(
    private http: HttpClient,
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
  }

  onClick() {
    let url = environment.urlInit;
    this.http.post(url, null, {responseType: "text"}).subscribe(data => {
      window.alert(data);
    })
  }
}
