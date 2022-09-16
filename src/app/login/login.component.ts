import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user);
    });
  }

  signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      console.log(data);
      this.router.navigateByUrl('/dashboard').then();
    },error=>{
      console.log(error);
      
    });
  }

}
