import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: '20',
    },
    {
      id: 2,
      name: 'Pedro',
      lastName: 'Perez',
      age: '24',
    },
    {
      id: 3,
      name: 'Hector',
      lastName: 'Perez',
      age: '25',
    },
    {
      id: 4,
      name: 'Ana',
      lastName: 'Perez',
      age: '24',
    },
    {
      id: 5,
      name: 'Pablo',
      lastName: 'Perez',
      age: '32',
    },






  ];

  constructor() { }

  ngOnInit(): void {
  }

}
