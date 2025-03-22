import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { SubscribeFormComponent } from '../../components/subscribe-form/subscribe-form.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent, SubscribeFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  public isLogin = true;

  public userService = inject(UserService);

  constructor() {
    console.log(this.userService.getList());
  }

  public createUser(user: User): void {
    this.userService.addUserToList(user);
    this.isLogin = !this.isLogin;
  }
}
