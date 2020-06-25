import { Component } from '@angular/core';
import { CountryService } from './service/country.service';
import { Store } from '@ngrx/store';
import { getStateCountries, getStateRegions} from './store/selectors/country.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Country App'
  regions:any[];
  countries:any=[];
  countriesObj:any[];
  selectedCountry:String;
  constructor(private countryService : CountryService,private store: Store) { 
    
  }
  
  ngOnInit() {
    this.store.select(getStateRegions).subscribe((regions:Array<any>)=>{
      if(regions.length>0){
       this.regions = regions
      }
      
    })
    this.store.select(getStateCountries).subscribe((countries:Array<any>)=>{
      if(countries.length>0){
        this.countries=countries.map(country=>country.name)
        this.countriesObj = countries;
      }
      
    })
  }

  regionChange(event){
    if(event)
     this.countryService.getCountries(event)
  }
  countryChange(event){
    this.selectedCountry = event;
  }
  loadDetails(){
    this.countryService.getcountryDetails(this.countriesObj.filter(country=>country.name === this.selectedCountry)[0])
  }
}
