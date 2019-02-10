import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  pokemons: Pokemon[];

  constructor() { }

  ngOnInit() {
  }

}
