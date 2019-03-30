import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonPreview } from '../pokemon-preview';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Output()
  unselected = new EventEmitter<undefined>();

  @Input()
  pokemon: PokemonPreview;

  constructor() { }

  ngOnInit() {
  }

  cardClicked() {
    this.unselected.emit(undefined);
  }

}
