import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public icons = [
    {
      title: 'Logo & Branding',
      imgSrc: '/assets/img/services-icon-1.png',
    },
    {
      title: 'Social Media Branding',
      imgSrc: '/assets/img/services-icon-2.png',
    },
    {
      title: 'Digital Products',
      imgSrc: '/assets/img/services-icon-3.png',
    },
    {
      title: 'Logo & Branding',
      imgSrc: '/assets/img/services-icon-4.png',
    },
    {
      title: 'Loreipsum dolor',
      imgSrc: '/assets/img/services-icon-5.png',
    },
    {
      title: 'Mobile & Web',
      imgSrc: '/assets/img/services-icon-6.png',
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
