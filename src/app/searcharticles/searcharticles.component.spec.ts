import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcharticlesComponent } from './searcharticles.component';

describe('SearcharticlesComponent', () => {
  let component: SearcharticlesComponent;
  let fixture: ComponentFixture<SearcharticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcharticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcharticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
