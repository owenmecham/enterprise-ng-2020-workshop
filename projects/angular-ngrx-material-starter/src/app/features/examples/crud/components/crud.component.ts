import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';
import { State } from '../../examples.state';
import { actionBooksDeleteOne, actionBooksUpsertOne } from '../books.actions';
import { Book } from '../books.model';
import { selectAllBooks, selectSelectedBook } from '../books.selectors';

@Component({
  selector: 'mfework-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  bookFormGroup = this.fb.group(CrudComponent.createBook());
  books$: Observable<Book[]> = this.store.pipe(select(selectAllBooks));
  selectedBook$: Observable<Book> = this.store.pipe(select(selectSelectedBook));

  isEditing: boolean;

  static createBook(): Book {
    return {
      id: uuid(),
      title: '',
      author: '',
      description: ''
    };
  }

  constructor(
    public store: Store<State>,
    public fb: FormBuilder,
    private router: Router
  ) {}

  select(book: Book) {
    this.isEditing = false;
    this.router.navigate(['examples/crud', book.id]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  edit(book: Book) {
    this.isEditing = true;
    this.bookFormGroup.setValue(book);
  }

  addNew() {
    this.bookFormGroup.reset();
    this.bookFormGroup.setValue(CrudComponent.createBook());
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete(book: Book) {
    this.store.dispatch(actionBooksDeleteOne({ id: book.id }));
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  save() {
    if (this.bookFormGroup.valid) {
      const book = this.bookFormGroup.value;
      this.store.dispatch(actionBooksUpsertOne({ book }));
      this.isEditing = false;
      this.router.navigate(['examples/crud', book.id]);
    }
  }
}
