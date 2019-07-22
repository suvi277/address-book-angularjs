import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { PersonAddress } from '../models/person-address';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  countryData: any[] = ['India', 'US', 'UK'];  
  pattern= /^abc/i;

  @Input()
  address: PersonAddress;
  
  @Output()
  add:EventEmitter<Object> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(f) {
	this.addAddress();
	f.resetForm();	
  }

  addAddress() {
    const mode = this.address.id ? "edit" : "new";

    this.add.emit({
      mode: mode,
      address: this.address
    });

    this.address = new PersonAddress();

    
  }

}
