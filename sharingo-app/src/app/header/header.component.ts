import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loginValue: string = 'false';
  constructor() { }

  ngOnInit() {
    this.loginValue = localStorage.getItem('loginValue');
    console.log(this.loginValue);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

}
