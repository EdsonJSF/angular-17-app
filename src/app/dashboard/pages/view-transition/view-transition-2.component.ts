import { Component } from '@angular/core';

import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition-2',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="" />
      <div class="bg-blue-500 w-56 h-56"></div>
    </section>
  `,
  styles: ``,
})
export class ViewTransitionComponent {}
