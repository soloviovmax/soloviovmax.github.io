import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  public socialIcons = [
    {
      title: 'Facebook',
      iconSrc: '/assets/img/facebook.png',
      href: '#',
    },
    {
      title: 'Google+',
      iconSrc: '/assets/img/google+.png',
      href: '#',
    },
    {
      title: 'Vk',
      iconSrc: '/assets/img/vk.png',
      href: '#',
    },
    {
      title: 'YouTube',
      iconSrc: '/assets/img/youtube.png',
      href: '#',
    },
    {
      title: 'Linkedin',
      iconSrc: '/assets/img/linkedin.png',
      href: '#',
    },
    {
      title: 'Digg',
      iconSrc: '/assets/img/digg.png',
      href: '#',
    },
    {
      title: 'Hz',
      iconSrc: '/assets/img/hz.png',
      href: '#',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
