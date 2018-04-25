import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickTurnComponent } from './joystick-turn.component';

describe('JoystickTurnComponent', () => {
  let component: JoystickTurnComponent;
  let fixture: ComponentFixture<JoystickTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
