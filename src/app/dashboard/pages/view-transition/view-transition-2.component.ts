import { Component } from '@angular/core';

import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-view-transition-2',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="300"
        style="view-transition-name: img1;"
      />

      <div
        class="fixed right-0 bottom-0 bg-blue-500 w-24 h-24 rounded-xl"
        style="view-transition-name: box1;"
      ></div>
    </section>
  `,
  styles: ``,
})
export class ViewTransitionComponent {}
