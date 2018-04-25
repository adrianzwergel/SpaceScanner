import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickScanComponent } from './joystick-scan.component';

describe('JoystickScanComponent', () => {
  let component: JoystickScanComponent;
  let fixture: ComponentFixture<JoystickScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
