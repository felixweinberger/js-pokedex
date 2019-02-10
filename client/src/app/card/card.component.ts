import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  pokemon: Pokemon;

  constructor() { }

  ngOnInit() {

  }

}
