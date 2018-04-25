import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-joystick-move',
  templateUrl: './joystick-move.component.html',
  styleUrls: ['./joystick-move.component.scss']
})
export class JoystickMoveComponent implements OnInit {

  controller: any;
  joystick: any;
  joystickArea: any;
  pt: any;
  constructor(public connection: ConnectionService) { }

  ngOnInit() {
    let me = this;
    this.controller = document.getElementById('joystick-move');
    this.joystick = document.getElementById('joystick-move-stick');
    this.joystickArea = document.getElementById('joystick-move-area');
    this.pt = this.controller.createSVGPoint();
    let fun = function (evt) { me.refreshJoystick(evt, me); };



    this.joystickArea.addEventListener('mouseleave', function () {
      me.joystick.setAttribute('cx', '100');
      me.joystick.setAttribute('cy', '100');
      me.controller.removeEventListener('mousemove', fun, true);
    }, false);

    this.joystickArea.addEventListener('mouseup', function () {
      me.joystick.setAttribute('cx', '100');
      me.joystick.setAttribute('cy', '100');
      me.controller.removeEventListener('mousemove', fun, true);
    }, false);

    this.joystickArea.addEventListener('mousedown', function (evt) {
      me.controller.addEventListener('mousemove', fun, true);
      me.refreshJoystick(evt, me);
    }, false);

    // touch
    this.joystickArea.addEventListener('touchend', function () {
      me.joystick.setAttribute('cx', '100');
      me.joystick.setAttribute('cy', '100');
      me.controller.removeEventListener('touchmove', fun, true);
    }, false);

    this.joystickArea.addEventListener('touchstart', function (evt) {
      me.controller.addEventListener('touchmove', fun, true);
      me.refreshJoystick(evt, me);
    }, false);
  }

  cursorPoint(evt): any {
    if (evt instanceof MouseEvent) {
      this.pt.x = evt.clientX;
      this.pt.y = evt.clientY;
    }
    else {
      // touch
      this.pt.x = evt.changedTouches[0].clientX;
      this.pt.y = evt.changedTouches[0].clientY;
      evt.preventDefault();
    }
    return this.pt.matrixTransform(this.controller.getScreenCTM().inverse());
  }

  

  refreshJoystick(evt,me) {
    var loc = me.cursorPoint(evt);
    var dis = Math.sqrt(Math.pow(loc.x - 100, 2) + Math.pow(loc.y - 100, 2));
    if (dis < 50) {
      this.joystick.setAttribute('cx', loc.x);
      this.joystick.setAttribute('cy', loc.y);
      this.updateToRobot(loc.x, loc.y);
    } else {
      var a = (loc.y - 100) / (loc.x - 100);
      var phi = 0;
      if (!isFinite(a))
        phi = Math.PI / 2;
      else {
        phi = Math.atan(a);
      }
      let x: number;
      let y: number;
      if (loc.x > 100) {
        x = (50 * Math.cos(phi)) + 100;
        y = (50 * Math.sin(phi)) + 100;
        
      } else {
        x = 100 - (50 * Math.cos(phi));
        y = 100 - (50 * Math.sin(phi));
      }
      this.joystick.setAttribute('cx', (x).toString());
      this.joystick.setAttribute('cy', (y).toString());
      this.updateToRobot(x, y);
    }
  }

  updateToRobot(x, y) {
    console.log({ x: (x - 100) / 50, y: (y - 100)/ 50 });
    if (this.connection.connected) {
      this.connection.socket.emit('newJoystickMove', { x: (x - 100) / 50, y: (y - 100) / 50 });
    }
  }
}
