import { Component } from '@angular/core';

import { HeavyLoadersSlowComponent } from '@share/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '@share/title/title.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export class DeferViewsComponent {}
