import { Component, OnInit } from '@angular/core';
import { Adopcion } from '../../../../models/adopcion.model';
import { AdopcionService } from '../../../../service/adopcion/adopcion.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit {
  adopciones: Adopcion[] = [];
  displayedColumns: string[] = ['id', 'estado', 'fecha_solicitud', 'fecha_resolucion', 'mascota_id', 'usuario_id'];

  constructor(private adopcionService: AdopcionService) {}

  ngOnInit(): void {
    this.adopcionService.getAdopciones().subscribe(data => {
      this.adopciones = data;
    });
  }
}
