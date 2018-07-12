import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name: 'Flavia Zancanaro',
      title: 'Front End Web Developer',
      address: '1/2 Main St, City, State, 2000',
      phone: [
        '0421-123-123',
        '0421-321-321',
        '0424-345-345'
      ]
    }
  }
  ngOnInit() {
  }

}
