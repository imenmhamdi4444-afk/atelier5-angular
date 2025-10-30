import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [CommonModule, FormsModule, RouterLink],
  styles: []
})
export class LoginComponent implements OnInit {

  user = new User();
  err: number = 0;
  message: string = "Login ou mot de passe erronés..";

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLoggedin() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.err = 1;
        if (err.error?.errorCause == "disabled")
          this.message = "L'utilisateur est désactivé !";
      }
    });
  }

}
