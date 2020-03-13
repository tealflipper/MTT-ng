import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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

  alta() {
    this.coursesService.alta(this.cour).subscribe(datos => {
        alert(datos['mensaje']);
        this.recuperarTodos();
    });
  }

  baja(id) {
    this.coursesService.baja(id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.coursesService.modificacion(this.cour).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id) {
    this.coursesService.seleccionar(id).subscribe(result => this.cour = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}
