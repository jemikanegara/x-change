import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth$: Observable<boolean>

  constructor(private router: Router, private store: Store<{ isAuth: boolean }>) {
    this.isAuth$ = this.store.pipe(select('isAuth'))
  }

  ngOnInit() {
    this.isAuth$.subscribe(data => {
      if (data) this.router.navigate(['portofolio'])
    })
  }
}
