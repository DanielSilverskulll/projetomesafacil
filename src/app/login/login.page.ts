import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


  

  LoginAuth() { //processo de login
    if (this.user && this.password) {
      this.authService.loginUser().subscribe(data => {
        const user = data.find((u: any) => u.user === this.user && u.password === this.password);
        if (user) {
          this.router.navigate(['/loader']);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
            alert('User successfully logged in.');
          }, 2000);
        } else {
          alert('Incorrect username or password.');
        }
      });
    } else {
      alert('Both fields are required.');
    }
  }
  Cadastro(){
    this.router.navigate(['/login']); //redirecionamento para página de cadastro
  }
}


