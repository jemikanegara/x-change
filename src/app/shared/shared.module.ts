import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { TabContainerComponent } from './component/tab-container/tab-container.component';
import { TabButtonComponent } from './component/tab-button/tab-button.component';
import { TabSelectComponent } from './component/tab-select/tab-select.component';


@NgModule({
  declarations: [TabContainerComponent, TabButtonComponent, TabSelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TabContainerComponent, TabButtonComponent, TabSelectComponent]
})
export class SharedModule { }
