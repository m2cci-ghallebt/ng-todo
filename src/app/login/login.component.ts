import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const isAuthenticated = this.authService.login(
      this.username,
      this.password
    );
    if (isAuthenticated) {
      console.log('connexion réussie');
    } else {
      console.log('Echec de connexion');
    }
  }
}
