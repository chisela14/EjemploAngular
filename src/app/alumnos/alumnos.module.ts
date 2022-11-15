//con ng g m alumnos se puede crear el módulo a través de la consola
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    ListadoComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnosModule { }
