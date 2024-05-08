import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [],
  template: `
    <h1 class="w-full h-[600px]" [class]="cssClass">
      heavy-loaders-slow works
    </h1>
  `,
})
export class HeavyLoadersSlowComponent {
  @Input({ required: true }) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
