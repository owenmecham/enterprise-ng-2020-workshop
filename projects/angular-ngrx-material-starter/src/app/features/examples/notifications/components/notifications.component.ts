import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NotificationService,
  ROUTE_ANIMATIONS_ELEMENTS
} from '../../../../core/core.module';

@Component({
  selector: 'mfework-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private readonly notificationService: NotificationService) {}

  ngOnInit() {}

  default() {
    this.notificationService.default('Default message');
  }

  info() {
    this.notificationService.info('Info message');
  }

  success() {
    this.notificationService.success('Success message');
  }

  warn() {
    this.notificationService.warn('Warning message');
  }

  error() {
    this.notificationService.error('Error message');
  }
}
