import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { PersonAddress } from '../models/person-address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  @Input()
  addresses: PersonAddress[];

  @Output()
  edit:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editContact(id) {
    this.edit.emit(id);
  }
}