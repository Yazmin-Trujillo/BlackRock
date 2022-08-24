import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  displaySidebar = false;
  searchText = '';

  loading = [false, false, false, false]

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

  load(index:any) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
}
}
