import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as Actions from '../store/actions/country.action'


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryDetailsAre :Subject<any> = new Subject<any>();
  constructor(private store: Store) {
   }

   getRegion(){
     return [
      'Europe','Asia'
     ]
   }

   getCountries(selectedRegion){
    this.store.dispatch(Actions.GetCountries({region:selectedRegion}))
  }

  getcountryDetails(selectedCounty){
    this.store.dispatch(Actions.GetCountry({country:selectedCounty}))
  }
}
