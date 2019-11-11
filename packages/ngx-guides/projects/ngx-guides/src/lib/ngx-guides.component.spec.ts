import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGuidesComponent } from './ngx-guides.component';

describe('NgxGuidesComponent', () => {
  let component: NgxGuidesComponent;
  let fixture: ComponentFixture<NgxGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
