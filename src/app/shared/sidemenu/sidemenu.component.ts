import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from '../../dashboard/dashboard.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {
  public menuItems = routes
    .map((routes) => routes.children ?? [])
    .flat()
    .filter(
      (route) =>
        route && route.path && route.path !== '**' && !route.path.includes(':')
    );
}
