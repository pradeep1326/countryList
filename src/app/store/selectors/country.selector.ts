import { createSelector } from '@ngrx/store';
import {  RootState } from '../reducers/country.reducer';

const getRegions = (state: RootState): any => state.regions;
const getCountries = (state: RootState): any => state.countries;
const getCountry = (state: RootState): any => state.country;

const getStateCountry = createSelector(
  (state: any) => state.rootState,
  getCountry
);

const getStateCountries = createSelector(
  (state: {rootState: RootState}) => state.rootState,
  getCountries
);

const getStateRegions = createSelector(
  (state: {rootState: RootState}) => state.rootState,
  getRegions
);

export { getStateCountry, getStateCountries, getStateRegions }