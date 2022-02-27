import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  id: string;
  internals: Internal[];
}

interface Internal {
  name: string;
  id: string;
}

const SERVICES: Service[] = [
  {
    name: 'Maths Proxy',
    id: 'Maths@Proxy1',
    internals: [
      {
        name: 'Calculus',
        id: '1',
      },
      {
        name: 'Algebra',
        id: '2'
      },
      {
        name: 'Geometry',
        id: '3',
      }
    ]
  },
  {
    name: 'Maths Proxy',
    id: 'Maths@Proxy1',
    internals: [
      {
        name: 'Calculus',
        id: '1',
      },
      {
        name: 'Algebra',
        id: '2'
      },
      {
        name: 'Geometry',
        id: '3',
      }
    ]
  }
];

@Component({
  selector: 'app-consent-overview',
  templateUrl: './consent-overview.component.html',
  styleUrls: ['./consent-overview.component.css']
})
export class ConsentOverviewComponent implements OnInit {
  services = SERVICES;

  constructor() { }

  ngOnInit(): void {
  }

}
