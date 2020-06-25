import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CountryComponent } from './country/country.component';
import{ FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CountryEffects} from './store/effects/country.effect';
import { rootReducer } from './store/reducers/country.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CountryEffects]),
    StoreModule.forRoot({
      rootState: rootReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
