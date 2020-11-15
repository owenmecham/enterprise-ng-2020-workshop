import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';

@Component({
  selector: 'mfework-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsComponent implements OnInit, OnDestroy, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  count$ = new BehaviorSubject(0);

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    removeEventListener('mr-clean-counter', (event: CustomEvent) => {});
  }

  ngAfterViewInit() {
    addEventListener('mr-clean-counter', (event: CustomEvent) => {
      this.setCounter(event);
    });
  }

  setCounter(event: CustomEvent) {
    this.count$.next(event?.detail?.counter);
  }

  increment() {
    const current = this.count$.getValue() + 1;
    this.count$.next(current);
  }
}
