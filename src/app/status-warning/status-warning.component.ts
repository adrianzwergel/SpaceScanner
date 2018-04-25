import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-status-warning',
  templateUrl: './status-warning.component.html',
  styleUrls: ['./status-warning.component.scss']
})
export class StatusWarningComponent implements OnInit {

  constructor(public connection: ConnectionService) { }

  ngOnInit() {
  }

}
