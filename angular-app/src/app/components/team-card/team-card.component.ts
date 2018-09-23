import { Component, OnInit, Input } from '@angular/core';

interface IPerson {
  fullName: string;
  imgSrc: string;
  jobTitle: string;
}

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() person : IPerson;

  constructor() { }

  ngOnInit() {
  }

}
