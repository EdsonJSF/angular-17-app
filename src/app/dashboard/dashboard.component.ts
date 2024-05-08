import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

import { SidemenuComponent } from '@share/sidemenu/sidemenu.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent {}
