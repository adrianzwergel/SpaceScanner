import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Boo } from 'bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JoystickMoveComponent } from './joystick-move/joystick-move.component';
import { JoystickTurnComponent } from './joystick-turn/joystick-turn.component';
import { JoystickTurnTowerComponent } from './joystick-turn-tower/joystick-turn-tower.component';
import { JoystickScanComponent } from './joystick-scan/joystick-scan.component';
import { JoypadLeftComponent } from './joypad-left/joypad-left.component';
import { JoypadRightComponent } from './joypad-right/joypad-right.component';
import { MapComponent } from './map/map.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { StatusWarningComponent } from './status-warning/status-warning.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LiveBarComponent } from './live-bar/live-bar.component';
import { PageMapComponent } from './page-map/page-map.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageSettingComponent } from './page-setting/page-setting.component';
import { PageConfigurationComponent } from './page-configuration/page-configuration.component';

import { ConnectionService } from './connection.service';
import { RobotService } from './robot.service';

@NgModule({
  declarations: [
    AppComponent,
    JoystickMoveComponent,
    JoystickTurnComponent,
    JoystickTurnTowerComponent,
    JoystickScanComponent,
    JoypadLeftComponent,
    JoypadRightComponent,
    MapComponent,
    StatusBarComponent,
    StatusWarningComponent,
    NavigationComponent,
    LiveBarComponent,
    PageMapComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageSettingComponent,
    PageConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConnectionService, RobotService],
  bootstrap: [AppComponent],
})
export class AppModule { }
