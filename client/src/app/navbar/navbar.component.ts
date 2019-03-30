import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output()
  inputChanged = new EventEmitter();

  constructor() { }

  onChange(evt) {
    this.inputChanged.emit(evt.target.value);
  }

  ngOnInit() {
  }

}
