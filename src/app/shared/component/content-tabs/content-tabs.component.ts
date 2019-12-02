import { Component, OnInit } from '@angular/core';

interface ContentTabsButton {
  type: ContentTabsType.BUTTON
  label: string
}

interface ContentTabsSelect {
  type: ContentTabsType.SELECT
  options: [ContentTabsOption]
}

interface ContentTabsOption {
  label: string,
  value: string
}

enum ContentTabsType {
  BUTTON = "BUTTON",
  SELECT = "SELECT"
}

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss']
})
export class ContentTabsComponent implements OnInit {

  left: ContentTabsButton | ContentTabsSelect
  right: ContentTabsButton | ContentTabsSelect

  constructor() {
  }

  ngOnInit() {
  }

}
