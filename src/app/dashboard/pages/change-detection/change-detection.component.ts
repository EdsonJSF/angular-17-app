import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { TitleComponent } from '@share/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2016',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2016',
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = "React"
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
    }, 3000);
  }
}
