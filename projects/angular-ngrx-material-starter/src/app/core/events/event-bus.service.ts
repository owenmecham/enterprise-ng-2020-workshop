import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Eev from 'eev';
import { NotificationService } from '../notifications/notification.service';
import { EventWindow } from './event-window';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  constructor(
    private readonly router: Router,
    private readonly notificationService: NotificationService
  ) {}

  initializeEventBus() {
    const eventWindow = window as EventWindow & typeof globalThis;
    if (!eventWindow.eventBus) {
      eventWindow.eventBus = new Eev();
    }

    eventWindow.notificationService = this.notificationService;
    eventWindow.router = this.router;

    // Set up the Eev listeners

    eventWindow.eventBus.on('notificationSuccess', function (data) {
      eventWindow.notificationService.success(data.message);
    });

    eventWindow.eventBus.on('notificationError', function (data) {
      eventWindow.notificationService.success(data.message);
    });

    eventWindow.eventBus.on('route', function (data) {
      eventWindow.router.navigate([data.url]);
    });
  }
}
