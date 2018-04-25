import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfigurationComponent } from './page-configuration.component';

describe('PageConfigurationComponent', () => {
  let component: PageConfigurationComponent;
  let fixture: ComponentFixture<PageConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
