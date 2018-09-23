import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public imgs = [
    '/assets/img/features_1.jpg',
    '/assets/img/features_2.jpg',
    '/assets/img/features_3.jpg',
    '/assets/img/features_4.jpg',
  ]

  constructor() { }

  ngOnInit() {
  }

}
