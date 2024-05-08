import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  gradeForm = new FormControl<Grade>('');

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
