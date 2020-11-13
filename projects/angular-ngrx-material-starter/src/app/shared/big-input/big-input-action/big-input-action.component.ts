import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'mfework-big-input-action',
  templateUrl: './big-input-action.component.html',
  styleUrls: ['./big-input-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigInputActionComponent {
  @Input()
  disabled = false;
  @Input()
  fontSet = '';
  @Input()
  fontIcon = '';
  @Input()
  faIcon = '';
  @Input()
  label = '';
  @Input()
  color = '';

  @Output()
  action = new EventEmitter<void>();

  hasFocus = false;

  onClick() {
    this.action.emit();
  }
}
