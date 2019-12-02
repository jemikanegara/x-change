import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioRoutingModule } from './portofolio-routing.module';
import { PortofolioComponent } from './portofolio.component';


@NgModule({
  declarations: [PortofolioComponent],
  imports: [
    CommonModule,
    PortofolioRoutingModule
  ]
})
export class PortofolioModule { }
