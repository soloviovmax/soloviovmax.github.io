import { Component, OnInit, Input } from '@angular/core';

interface IIcon {
  title: string;
  imgSrc: string;
}

@Component({
  selector: 'app-services-icon',
  templateUrl: './services-icon.component.html',
  styleUrls: ['./services-icon.component.scss']
})
export class ServicesIconComponent implements OnInit {

  @Input() icon : IIcon;

  constructor() { }

  ngOnInit() {
  }

}
