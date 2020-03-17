import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  internalData = [];
  externalData: any[];
  valveData: number[];
  constructor() {}

  ngOnInit() {
    // for (let i = 0; i < 42; i++) {
    //   const row = [];
    //   for (let j = 0; j < 13; j++) {
    //     row.push(this.random(288, 500)); //
    //   }
    //   this.internalData.push(row);
    // }

    this.valveData = [
      100,
      102,
      103,
      108,
      109,
      113,
      115,
      118,
      190,
      198,
      330,
      190,
      189,
      118,
      117,
      115,
      113,
      109,
      108,
      105,
      102
    ];
    this.externalData = [
      100,
      102,
      103,
      108,
      109,
      113,
      115,
      118,
      121,
      124,
      130,
      125,
      122,
      118,
      117,
      115,
      113,
      109,
      108,
      105,
      102
    ];
    this.internalData = [
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 308, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 311, 310, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 309, 312, 288, 288, 288, 288, 288, 288, 288],
      [288, 300, 310, 311, 313, 315, 314, 310, 308, 288, 288, 288, 288],
      [288, 300, 300, 300, 311, 313, 310, 288, 288, 288, 288, 288, 288],
      [288, 300, 300, 310, 308, 309, 306, 288, 288, 288, 288, 288, 288],
      [288, 300, 310, 300, 305, 300, 302, 288, 288, 288, 288, 288, 288],
      [288, 300, 300, 300, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 300, 288, 300, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 300, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 300, 300, 300, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288],
      [288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288, 288]
    ];
  }

  random(min, max) {
    return (max - min) * Math.random() + min;
  }
}
