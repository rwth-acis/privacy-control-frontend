import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Purpose} from "../model";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-purpose-overview',
  templateUrl: './purpose-overview.component.html',
  styleUrls: ['./purpose-overview.component.css']
})
export class PurposeOverviewComponent implements OnInit {
  purposes: Purpose[] | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Purpose[]>(environment.urlPurposeList).subscribe(data => {
        this.purposes = data;
      }
    )
  }

}
