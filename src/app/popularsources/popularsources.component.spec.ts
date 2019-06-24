import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularsourcesComponent } from './popularsources.component';

describe('PopularsourcesComponent', () => {
  let component: PopularsourcesComponent;
  let fixture: ComponentFixture<PopularsourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularsourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularsourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
