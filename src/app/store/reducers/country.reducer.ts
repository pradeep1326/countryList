import { createReducer, on } from '@ngrx/store';

import { GetRegions,GetCountriesSuccess,GetCountry } from '../actions/country.action';

export interface RootState {
  regions:string[];
  countries: any[];
  country: any;
}

const initialState: RootState = {
  regions:[
    'Europe','Asia'
  ],
  countries:[],
  country:{}
}

export const rootReducer = createReducer(initialState,
  on(GetCountry, (state, action) => ({...state,country:action.country})),
  on(GetCountriesSuccess, (state, action) => ({...state,countries:action.data })),
  on(GetRegions, (state, action) => ({...state,countries:action.data }))
)