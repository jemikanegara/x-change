import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortofolioRoutingModule } from './portofolio-routing.module';
import { PortofolioComponent } from './portofolio.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PortofolioComponent],
  imports: [
    CommonModule,
    PortofolioRoutingModule,
    SharedModule
  ]
})
export class PortofolioModule { }
