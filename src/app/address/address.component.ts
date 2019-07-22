import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PersonAddress } from '../models/person-address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input()
  address: PersonAddress;

  @Output()
  edit:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editContact() {
    this.edit.emit(this.address.id);
  }
}
