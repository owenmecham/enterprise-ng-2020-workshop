import { Router } from '@angular/router';
import { Eev } from 'eev';
import { NotificationService } from '../notifications/notification.service';

export interface EventWindow extends Window {
  eventBus: Eev;
  notificationService: NotificationService;
  router: Router;
}
