import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit {
  options = ["gold", "silver", "platinum", "rhodium"]
  onSelect(active) {
    console.log(active)
  }
  constructor() { }

  ngOnInit() {
  }

}
