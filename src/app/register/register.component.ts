// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css',
// })
// export class RegisterComponent {
//   username: string = '';
//   password: string = '';

//   constructor(private authService: AuthService) {}
//   onRegister() {
//     this.authService.login(this.username, this.password).subscribe({
//       next: (value) => console.log('Login success : ', value),
//       error: (error) => console.error('Login error : ', error),
//       complete: () => console.log('login request complete'),
//     });
//   }
// }
