import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickMoveComponent } from './joystick-move.component';

describe('JoystickMoveComponent', () => {
  let component: JoystickMoveComponent;
  let fixture: ComponentFixture<JoystickMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
