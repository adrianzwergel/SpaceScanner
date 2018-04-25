import { Component, OnInit } from '@angular/core';
import { RobotService } from '../robot.service'

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  SelectedScan: any;

  constructor(public robot: RobotService) { 
}

  ngOnInit() {
  }

}
