import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickTurnTowerComponent } from './joystick-turn-tower.component';

describe('JoystickTurnTowerComponent', () => {
  let component: JoystickTurnTowerComponent;
  let fixture: ComponentFixture<JoystickTurnTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickTurnTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickTurnTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
