import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface Purpose {
  name: string,
  description: string,
  mandatory: boolean
}

const PURPOSES: Purpose[] = [
  {
    name: "Forum post collection",
    description: "Data is collected from forum posts and replies to enable engage chatbot services.",
    mandatory: true
  },
  {
    name: "Assignment data collection",
    description: "Data is collected from assignments to help in recommending literature.",
    mandatory: false
  },

]

@Component({
  selector: 'app-consent-course',
  templateUrl: './consent-course.component.html',
  styleUrls: ['./consent-course.component.css']
})
export class ConsentCourseComponent implements OnInit {

  purposes = PURPOSES;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

}
