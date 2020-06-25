import { Component, OnInit,  Input, Output,EventEmitter } from '@angular/core';
import {  CountryService } from '../service/country.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() label:string;
  @Input() list:any[];
  @Output() itemChange = new EventEmitter();

  ngOnInit() {}
  
  changeItem(event){
    this.itemChange.emit(event.target.value)
  }
}
