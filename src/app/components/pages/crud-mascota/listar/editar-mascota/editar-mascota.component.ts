import { Component } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Mascota } from '../../../../../models/mascota.model';
import { MascotaService } from '../../../../../service/mascota.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-mascota',
  standalone: false,
  templateUrl: './editar-mascota.component.html',
  styleUrl: './editar-mascota.component.scss'
})
export class EditarMascotaComponent {
 constructor(
    @Inject(MAT_DIALOG_DATA) public mascota: Mascota,
    private dialogRef: MatDialogRef<EditarMascotaComponent>,
    private mascotaService: MascotaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('Mascota recibida para editar:', this.mascota);
  }

  close() {
    this.dialogRef.close();
  }

  guardar() {
    if (this.mascota.nombre && this.mascota.raza) { // valida lo que necesites
      this.mascotaService.actualizar(this.mascota.id!, this.mascota).subscribe({
        next: () => {
          this.snackBar.open('Mascota actualizada correctamente', 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-success']
          });
          this.dialogRef.close(true); // puedes enviar true para indicar éxito
        },
        error: () => {
          this.snackBar.open('Error al actualizar mascota', 'Cerrar', {
            duration: 3000,
            panelClass: ['snackbar-error']
          });
        }
      });
    }
  }
}
