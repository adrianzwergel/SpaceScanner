import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-joypad-left',
  templateUrl: './joypad-left.component.html',
  styleUrls: ['./joypad-left.component.scss']
})
export class JoypadLeftComponent implements OnInit {

  constructor(public connection: ConnectionService) {

  }

  ngOnInit() {
  }
  
  StartScan() {
    this.connection.socket.emit("startScan");
  }

  StopScan() {
    this.connection.socket.emit("stopScan");
  }
}
