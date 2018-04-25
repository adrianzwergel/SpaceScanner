import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: any;
  points: any;
  lastPoint: any;
  i: number = 0;
  
  constructor() {
    
  }

  ngOnInit() {
    let me = this;
    this.map = document.getElementById('map');
    this.points = document.getElementById('points');
    this.lastPoint = document.getElementById('lastPoint');
    setInterval(function () {
      me.addPoint(me.i * 10, Math.sin(me.i/2) * 20 + 50);
      me.i++;
    }, 500);
  }

  addPoint(x, y) {
    var point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("cx", x);
    point.setAttribute("cy", y);
    point.setAttribute("r", "3");
    point.setAttribute("fill", "#007bff");
    this.points.appendChild(point);

    this.lastPoint.setAttribute("x2", x);
    this.lastPoint.setAttribute("y2", y);
  }

}
