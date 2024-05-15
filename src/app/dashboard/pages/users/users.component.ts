import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersService } from '@services/users.service';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './users.component.html',
  styles: ``,
})
export class UsersComponent {
  #userService = inject(UsersService);

  users = this.#userService.users;
  loading = this.#userService.loading;
}
