import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { environment } from '@environments';
import { UserResponse, UserState } from '@interfaces';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #state = signal<UserState>({
    loading: true,
    users: [],
  });

  #http = inject(HttpClient);

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.#http
      .get<UserResponse>(`${environment.baseURL}/users`)
      .pipe(delay(2000))
      .subscribe({
        next: (res) => {
          this.#state.set({
            loading: false,
            users: res.data,
          });
        },
        error: () => {
          this.#state.update((value) => ({ ...value, loading: false }));
        },
      });
  }
}
