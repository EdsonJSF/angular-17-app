import { Component } from '@angular/core';

import { TitleComponent } from '@share/title/title.component';
import { HeavyLoadersFastComponent } from '@share/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: "app-defer-options",
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export class DeferOptionsComponent {}
