//con ng g c alumnos/listado se puede 
//crear el componente a través de la consola
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  clase:String = "2º DAW";
  alumnos:String[] = ["Marta", "Sebas", "Guille"]
}
