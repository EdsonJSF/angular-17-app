import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { TitleComponent } from '@share/title/title.component';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title [title]="title()" />

    @if (user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
      <p>{{ user()?.email }}</p>
    </section>
    } @else {
    <h3>loading users</h3>
    }
  `,
  styles: ``,
})
export class UserComponent {
  #route = inject(ActivatedRoute);
  #userService = inject(UsersService);

  public user = toSignal(
    this.#route.params.pipe(
      switchMap(({ id }) => this.#userService.getUSerById(id))
    )
  );

  public title = computed(() => {
    let title = 'User Info:';
    if (this.user()) {
      title += ` ${this.user()?.first_name}`;
    }
    return title;
  });

  constructor() {}
}
