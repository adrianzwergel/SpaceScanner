import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ConnectionService {
  private _pingInterval: any;

  public socket: any;
  public latency: string = "-.-";

  public warnings: any = [];
  public lastWarning: any;

  private _connected: boolean = false;
  public get connected(): boolean {
    return this._connected;
  }
  public set connected(state: boolean) {
    if (state) {
      this.removeWarning("Probleme mit der Verbindung");
      this._pingInterval = setInterval(() => {
        this.socket.emit('getPing', new Date());
      }, 1000);
    }
      
    else {
      clearInterval(this._pingInterval);
      this.latency = "-.-";
    }
    this._connected = state;
  }

  constructor() {
    let me = this;
    this.socket = io('192.168.1.1:3000');

    this.socket.on('connect', date => {
      this.connected = true;
    });

    this.socket.on('disconnect', date => {
      this.connected = false;
    });

    this.socket.io.on('connect_error', function (err) {
      me.pushWarning("Probleme mit der Verbindung");
    });

    this.socket.on('rGetPing', date => {
      this.latency = ((new Date()).getTime() - (new Date(date)).getTime()).toString();
    });
  }

  public removeWarning(text: string) {
    let index: number = this.warningsContains(text);
    if (index > -1) this.warnings.splice(index, 1);
  }

  public pushWarning(text: string) {
    let index: number = this.warningsContains(text);
    if (index > -1) {
      this.warnings[index].date = new Date();
      this.lastWarning = this.warnings[index];
    }
    else {
      let warn = { text: text, date: new Date() };
      this.warnings.push(warn);
      this.lastWarning = warn;
    }
  }

  private warningsContains(text: string) {
    var i;
    for (i = 0; i < this.warnings.length; i++) {
      if (this.warnings[i].text === text) {
        return i;
      }
    }
    return -1;
  }
}
