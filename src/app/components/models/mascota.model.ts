export interface Mascota {
  id?: number;
  nombre: string;
  raza: string;
  edad: number;
  estado: 'DISPONIBLE' | 'ADOPTADO';
  foto?: string; // base64 o nombre de archivo
  fecha_ingreso?: string;
}
