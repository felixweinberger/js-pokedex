import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearchChange(event) {
    this.search.emit(event.target.value);
  }

}
