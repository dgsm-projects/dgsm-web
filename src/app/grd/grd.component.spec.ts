import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdComponent } from './grd.component';

describe('GrdComponent', () => {
  let component: GrdComponent;
  let fixture: ComponentFixture<GrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
