import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Purpose {
  id: Number;
  title: String;
  description: String;
  version: String;
}

@Component({
  selector: 'app-purpose-overview',
  templateUrl: './purpose-overview.component.html',
  styleUrls: ['./purpose-overview.component.css']
})
export class PurposeOverviewComponent implements OnInit {
  purposes: Purpose[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Purpose[]>('http://localhost:8080/pieces/PurposeList').subscribe(data => {
        this.purposes = data;
      }
    )
  }

}
