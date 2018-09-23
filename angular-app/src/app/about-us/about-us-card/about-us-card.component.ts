import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// TODO
declare var require: any;

interface ICard {
  title: string;
  description: string;
  ingSrc: string;
}

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnInit {

  @Input() card : ICard;
  @Input() fullCard : boolean;
  @Output() btnOnClick = new EventEmitter;
  public description : string;

  constructor() { }

  ngOnInit() {
    const cliTruncate = require('cli-truncate');
    this.description = !this.fullCard ? cliTruncate(this.card.description, 120) : this.card.description;
  }

  onClick() {
    this.btnOnClick.emit(this.card);
  }
}
