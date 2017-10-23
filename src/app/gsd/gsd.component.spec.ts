import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsdComponent } from './gsd.component';

describe('GsdComponent', () => {
  let component: GsdComponent;
  let fixture: ComponentFixture<GsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
