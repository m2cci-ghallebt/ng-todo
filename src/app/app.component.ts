import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AsyncPipe, NgIf } from '@angular/common';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'todos', component: TodosComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    LoginComponent,
    RouterModule,
    FormsModule,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      console.log('Statut de la connexion', isLoggedIn);
    });
  }
  title = 'NG-TODO-todo-dec2024';
}
