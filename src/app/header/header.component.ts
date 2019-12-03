import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../auth.actions';

import { increment, decrement, reset } from '../counter.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth$: Observable<boolean>
  count$: Observable<number>;


  constructor(private store: Store<{ isAuth: boolean, count: number }>, private router: Router) {
    this.isAuth$ = store.pipe(select("isAuth"))
  }

  ngOnInit() {
  }

  onLogin() {
    this.store.dispatch(login())
  }

  onLogout() {
    this.store.dispatch(logout())
    this.router.navigate([''])
  }
}
