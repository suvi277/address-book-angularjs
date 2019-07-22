import { Component, OnInit } from '@angular/core';
import { PersonAddress } from '../models/person-address';
import { AddressBookDataService } from '../services/address-book-data.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  address:PersonAddress = new PersonAddress();
  
  constructor(private dataService: AddressBookDataService) { }

  ngOnInit() {
  }

  saveAddress(event) {
    if(event.mode === "new") {
      this.dataService.addAddress(event.address);
    } else if (event.mode === "edit") {
      this.dataService.updateAddressById(event.address.id, event.address);
    }
  }

  editAddress(id) {
    this.address = new PersonAddress(this.dataService.getAddressById(id));
  }

  get addresses() {
    return this.dataService.getAddresses();
  }

}
