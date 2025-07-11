import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   constructor(private router: Router) {} // ✅ Inyectar Router correctamente

  ngOnInit(): void {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
      this.router.navigate(['/auth/login']); // ✅ Usar this.router correctamente
    }
  }
}
