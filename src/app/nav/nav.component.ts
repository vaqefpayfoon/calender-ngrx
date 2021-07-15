import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../@services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private router: Router,
              private authService: AuthService) { }
  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }
  login(): void {
    this.authService.login(this.model).subscribe(
      res => {
        if (res) {
          this.router.navigate(['/calender']);
        }
      }
    );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.router.navigate(['/home']);
  }

}
