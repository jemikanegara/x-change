import { NgModule } from "@angular/core";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class AppIconModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars)
  }
}
