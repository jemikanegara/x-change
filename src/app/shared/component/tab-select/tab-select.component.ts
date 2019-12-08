import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-tab-select',
  templateUrl: './tab-select.component.html',
  styleUrls: ['./tab-select.component.scss']
})
export class TabSelectComponent implements OnInit {
  @Output() select = new EventEmitter<string>()

  @Input() options: string[]
  @Input() active: string

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.select.emit(this.active)
  }
}
