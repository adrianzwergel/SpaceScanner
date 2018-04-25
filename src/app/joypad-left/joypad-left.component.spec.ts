import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoypadLeftComponent } from './joypad-left.component';

describe('JoypadLeftComponent', () => {
  let component: JoypadLeftComponent;
  let fixture: ComponentFixture<JoypadLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoypadLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoypadLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
