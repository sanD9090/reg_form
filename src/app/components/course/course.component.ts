import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

q=["Java","Python","C#","React"];
cf:FormGroup;


 
  constructor(private cb:FormBuilder) {
    this.cf=  this.cb.group({
      course:['',Validators.required],
      time:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
