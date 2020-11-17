import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';

@Component({
  selector: 'mfework-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  count$ = new BehaviorSubject(0);

  constructor() {}

  ngOnInit() {}

  increment() {
    const current = this.count$.getValue() + 1;
    this.count$.next(current);
  }
}
