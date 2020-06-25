import { Component, OnInit } from '@angular/core';
import { RootState } from '../store/reducers/country.reducer';
import { Store } from '@ngrx/store';
import { getStateCountry} from '../store/selectors/country.selector';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryDetail = {
    name:'',
    capital:'',
    population:'',
    currencies:[],
    flag:''
  };

 constructor(private store: Store<{ rootState: RootState }>) {}

  ngOnInit() {
     this.store.select(getStateCountry).subscribe(data =>{
      if(data){
        this.countryDetail = data;
      }
    })
  }
}
