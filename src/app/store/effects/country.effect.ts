import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ActionTypes from '../actions/country.action';

@Injectable()
export class CountryEffects {
  constructor(private http: HttpClient, private action$: Actions) {}

  private ApiURL: string = 'https://restcountries.eu/rest/v2/region/';

  GetCountriesEffect$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ActionTypes.GetCountries),
      mergeMap(action =>
        this.http.get(this.ApiURL+action.region.toLowerCase()).pipe(
          map((data: any) => {
            return ActionTypes.GetCountriesSuccess({ data: data });
          }),
          catchError((error: Error) => {
            return of(ActionTypes.ApiError({error:error}));
          })
        )
      )
    )
  );

}
