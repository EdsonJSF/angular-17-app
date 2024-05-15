import { Component } from '@angular/core';

import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition-1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: img1;"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: box1;"
      ></div>
    </section>
  `,
  styles: ``,
})
export class ViewTransitionComponent {}
