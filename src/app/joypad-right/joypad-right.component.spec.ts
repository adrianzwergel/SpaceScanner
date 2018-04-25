import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoypadRightComponent } from './joypad-right.component';

describe('JoypadRightComponent', () => {
  let component: JoypadRightComponent;
  let fixture: ComponentFixture<JoypadRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoypadRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoypadRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
