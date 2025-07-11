import { Component } from '@angular/core';
import { Mascota } from '../../../../models/mascota.model';
import { MascotaService } from '../../../../service/mascota.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.scss'
})
export class CrearComponent {
  
  mascota: Mascota = {
    nombre: '',
    raza: '',
    edad: 0,
    estado: 'DISPONIBLE',
    foto: '',
    fecha_ingreso: new Date().toISOString().split('T')[0]
  };

  constructor(private mascotaService: MascotaService) {}

  guardar() {
    if (this.mascota.nombre && this.mascota.raza && this.mascota.edad) {
      this.mascotaService.crear(this.mascota).subscribe({
        next: () => {
          alert('Mascota registrada');
          this.mascota = {
            nombre: '',
            raza: '',
            edad: 0,
            estado: 'DISPONIBLE',
            foto: '',
            fecha_ingreso: new Date().toISOString().split('T')[0]
          };
        },
        error: () => {
          alert('No se pudo registrar la mascota');
        }
      });
    } else {
      alert('Completa todos los campos');
    }
}

}
