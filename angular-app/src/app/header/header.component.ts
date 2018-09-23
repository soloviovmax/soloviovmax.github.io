import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navList = [
    'Features',
    'Offer',
    'Pricing',
    'Clients',
    'Facts',
    'Projects',
    'Team',
    'Contact',
  ];
  hamburgerButtonIsVisible : Boolean;
  public leftBarIsVisible = false;

  constructor() {
  }

  ngOnInit() {
    this.hamburgerButtonIsVisible = window.innerWidth > 900 ? false : true;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        this.hamburgerButtonIsVisible = false;
      } else {
        this.hamburgerButtonIsVisible = true;
      }
    })
  }

  toggleMenu(e) {
    if (e && e.target.classList.contains('nav-list')) {
      return;
    }
    this.leftBarIsVisible = !this.leftBarIsVisible;
  }

}
