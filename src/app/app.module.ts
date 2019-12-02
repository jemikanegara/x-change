import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Module
import { AppIconModule } from './app-icon.module'
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Store
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';

// Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppIconModule,
    SharedModule,
    StoreModule.forRoot({
      isAuth: authReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
