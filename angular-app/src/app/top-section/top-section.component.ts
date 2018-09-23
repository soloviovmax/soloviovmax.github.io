import { Component, OnInit } from '@angular/core';
import { TimelineMax, Back } from 'gsap';
import Splitter from 'split-html-to-chars';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {

  constructor() {
    
  }

  // animation() {
  //   const t1 = new TimelineMax();

  //   const els = document.querySelectorAll(".js-splitme");
  //   [].forEach.call(els, function(el) {
  //       el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
  //   });

  //   t1
  //     .fromTo('.header .logo-wrap', 1, {x:-200, opacity:0}, {x:0, opacity:1} )
  //     .staggerFromTo('.header .nav-list .nav-item', 3, {y:50, opacity:0}, {y:0, opacity:1}, 0.1)
  //     .staggerFromTo('.top-section .title .letter', .8, {y:40, opacity:0}, {y:0, opacity:1, ease: Back.easeOut.config(3)}, 0.1);
  // }

  ngOnInit() {
    // this.animation();
  }

}
