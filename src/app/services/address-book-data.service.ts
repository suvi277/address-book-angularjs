import { Injectable } from '@angular/core';
import { PersonAddress } from '../models/person-address';

@Injectable({
  providedIn: 'root'
})
export class AddressBookDataService {
  private lastId: number = 0;
  private addresses = [];

  constructor() { }

  addAddress(address: PersonAddress):AddressBookDataService {
    if(!address.id) {
      address.id = ++this.lastId;
    }
    this.addresses.push(address.save());
    return this;
  }

  updateAddressById(id: number, values: PersonAddress): PersonAddress {
    let address: PersonAddress = this.getAddressById(id);

    if(!address) {
      return null;
    }

    Object.assign(address, values.save());
    return address;
  }

  getAddresses(): PersonAddress[] {
    return [].concat(this.addresses);
  }

  getAddressById(id: number): PersonAddress {
    return this.addresses.filter(address => address.id === id).pop();
  }
}
