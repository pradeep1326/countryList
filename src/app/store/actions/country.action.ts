import {  createAction, props } from '@ngrx/store';

export enum CountryActionTypes {
    GET_REGIONS = 'GET_REGIONS',
    GET_COUNTRIES = 'GET_COUNTRIES',
    GET_COUNTRY = 'GET_COUNTRY',
    GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS',
    API_ERROR_ACTION='API_ERROR_ACTION',
  }
  export const GetRegions = createAction(CountryActionTypes.GET_REGIONS, props<{ data: any }>());
  export const GetCountries = createAction(CountryActionTypes.GET_COUNTRIES, props<{ region: string }>());
  export const GetCountry = createAction(CountryActionTypes.GET_COUNTRY, props<{ country: any }>());
  export const GetCountriesSuccess = createAction(CountryActionTypes.GET_COUNTRIES_SUCCESS, props<{ data: any }>());
  export const ApiError = createAction(CountryActionTypes.API_ERROR_ACTION, props<{ error: any }>()); 