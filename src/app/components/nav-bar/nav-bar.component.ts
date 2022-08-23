import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  displaySidebar = false;
  searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  //funciones
  showSidebar() {
    this.displaySidebar = true
  }
  hideSidebar() {
    this.displaySidebar = false
  }
}
