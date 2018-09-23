import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team = [
    {
      fullName: 'Jeff Norton',
      imgSrc: '/assets/img/team-1.jpg',
      jobTitle: 'Graphic Designer',
    },
    {
      fullName: 'Anita Allen',
      imgSrc: '/assets/img/team-2.jpg',
      jobTitle: 'Graphic Designer',
    },
    {
      fullName: 'Jeff Norton',
      imgSrc: '/assets/img/team-3.jpg',
      jobTitle: 'Graphic Designer',
    },
    {
      fullName: 'Anita Allen',
      imgSrc: '/assets/img/team-4.jpg',
      jobTitle: 'Graphic Designer',
    },
    {
      fullName: 'Jeff Norton',
      imgSrc: '/assets/img/team-5.jpg',
      jobTitle: 'Graphic Designer',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
