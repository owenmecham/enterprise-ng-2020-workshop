import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mfework-big-input',
  templateUrl: './big-input.component.html',
  styleUrls: ['./big-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputComponent {
  @Input()
  placeholder: string;

  @Input()
  value = '';
  @Input()
  disabled = false;

  hasFocus = false;
}
