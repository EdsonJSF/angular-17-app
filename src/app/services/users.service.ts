import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

import { environment } from '@environments';
import { User, UserResponse, UsersResponse, UserState } from '@interfaces';

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
      .get<UsersResponse>(`${environment.baseURL}/users`)
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

  getUSerById(id: string): Observable<User> {
    return this.#http
      .get<UserResponse>(`${environment.baseURL}/users/${id}`)
      .pipe(
        delay(2000),
        map((res) => res.data)
      );
  }
}
