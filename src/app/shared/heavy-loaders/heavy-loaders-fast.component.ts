import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [],
  template: `
    <section class="w-full" [class]="cssClass">
      <ng-content></ng-content>
    </section>
  `,
})
export class HeavyLoadersFastComponent {
  @Input({ required: true }) cssClass!: string;
}
