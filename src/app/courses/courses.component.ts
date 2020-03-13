import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course=null;
  cour={
    id:null,
    name:null,
    length: null,
    prof: null,
    cost: null,
    type: null,
    genres: null
  }
  constructor(private coursesService: CoursesService){}

  ngOnInit() {
    this.recuperarTodos();
  }
  recuperarTodos() {
    this.coursesService.recuperarTodos().subscribe(result => this.course = result);
  }
hayRegistros() {
    return true;
  } 

}
