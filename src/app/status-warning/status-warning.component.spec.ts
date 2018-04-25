import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWarningComponent } from './status-warning.component';

describe('StatusWarningComponent', () => {
  let component: StatusWarningComponent;
  let fixture: ComponentFixture<StatusWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
