import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-page-configuration',
  templateUrl: './page-configuration.component.html',
  styleUrls: ['./page-configuration.component.scss']
})
export class PageConfigurationComponent implements OnInit {

  Config: any;

  constructor(public connection: ConnectionService) {
    let me = this;
    this.connection.socket.on("rGetConfig", function (data) { me.Config = data; });
    this.connection.socket.on("configUpdated", function (data) { me.Config = data; });
  }

  ngOnInit() {
    this.connection.socket.emit("getConfig");
  }

  update() {
    console.log(this.Config[0].items[0]);
    this.connection.socket.emit("setConfig", this.Config);
  }

}
