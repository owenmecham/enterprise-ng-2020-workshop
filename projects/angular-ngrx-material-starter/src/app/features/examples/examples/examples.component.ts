import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';
import { State } from '../examples.state';

@Component({
  selector: 'mfework-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'mfework.examples.menu.todos' },
    { link: 'stock-market', label: 'mfework.examples.menu.stocks' },
    { link: 'theming', label: 'mfework.examples.menu.theming' },
    { link: 'crud', label: 'mfework.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'mfework.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'mfework.examples.menu.form' },
    { link: 'notifications', label: 'mfework.examples.menu.notifications' },
    { link: 'elements', label: 'mfework.examples.menu.elements' }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
