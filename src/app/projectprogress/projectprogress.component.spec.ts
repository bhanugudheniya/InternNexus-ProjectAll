import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectprogressComponent } from './projectprogress.component';

describe('ProjectprogressComponent', () => {
  let component: ProjectprogressComponent;
  let fixture: ComponentFixture<ProjectprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
