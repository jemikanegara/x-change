import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTabsComponent } from './component/content-tabs/content-tabs.component';



@NgModule({
  declarations: [ContentTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentTabsComponent]
})
export class SharedModule { }
