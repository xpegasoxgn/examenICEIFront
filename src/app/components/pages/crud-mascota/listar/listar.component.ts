import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Mascota } from '../../../../models/mascota.model';
import { MascotaService } from '../../../../service/mascota.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent implements OnInit  {

  mascotas: Mascota[] = [];
  mascotaEliminar: number | null = null;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'estado', 'acciones'];

  @ViewChild('confirmDialog') confirmDialogTemplate!: TemplateRef<any>;

  constructor(
    private mascotaService: MascotaService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });
  }
   abrirModalEditar(mascota: Mascota){
    this.dialog.open( EditarMascotaComponent,{
      width:'400px',
      data: mascota,// le vamos a mandar data  la data mascota
    });

  }
  abrirDialogEliminar(id: number) {
    this.mascotaEliminar = id;
    this.dialog.open(this.confirmDialogTemplate);
  }

  confirmarEliminar() {
    if (this.mascotaEliminar != null) {
      this.mascotaService.eliminar(this.mascotaEliminar).subscribe({
        next: () => {
          this.snackBar.open('Mascota eliminada', 'Cerrar', { duration: 3000 });
          this.dialog.closeAll();
          this.ngOnInit(); // recargar lista
        },
        error: () => {
          this.snackBar.open('Error al eliminar la mascota', 'Cerrar', { duration: 3000 });
          this.dialog.closeAll();
        }
      });
    }
  }

  cancelarEliminacion() {
    this.mascotaEliminar = null;
    this.dialog.closeAll();
  }

}
