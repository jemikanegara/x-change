import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuth = true
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.isAuth === true) {
      this.router.navigate(['portofolio'])
    }
  }

}
