import { Component } from '@angular/core';
import { Adopcion } from '../../../../models/adopcion.model';
import { AdopcionService } from '../../../../service/adopcion/adopcion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.scss'
})
export class CrearComponent {
  adopcion: Adopcion = {
    id: 0,
    estado: 'PENDIENTE',
    fecha_resolucion: '',
    fecha_solicitud: new Date().toISOString().split('T')[0],
    mascota_id: 0,
    usuario_id: 0
  };

  constructor() {}

  guardar() {
    if (this.adopcion.mascota_id && this.adopcion.usuario_id) {
      alert('Adopción registrada');
      this.adopcion = {
        id: 0,
        estado: 'PENDIENTE',
        fecha_resolucion: '',
        fecha_solicitud: new Date().toISOString().split('T')[0],
        mascota_id: 0,
        usuario_id: 0
      };
    } else {
      alert('Completa todos los campos');
    }
  }

}
