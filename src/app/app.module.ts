import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelperService } from './services/helper.service';
import { ClockComponent } from './components/clock/clock.component';
import { HomeComponent } from './components/home/home.component';
import { StatusComponent } from './components/status/status.component';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers';
import { environment } from '../environments/environment';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const NGRX_MODULES = [
  StoreModule.forRoot(reducer),
];
if (!environment.production) {
  NGRX_MODULES.push(StoreDevtoolsModule.instrument());
}
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ClockComponent,
    HomeComponent,
    StatusComponent,
    NavComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...NGRX_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
