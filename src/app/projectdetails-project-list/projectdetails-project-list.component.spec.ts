import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailsProjectListComponent } from './projectdetails-project-list.component';

describe('ProjectdetailsProjectListComponent', () => {
  let component: ProjectdetailsProjectListComponent;
  let fixture: ComponentFixture<ProjectdetailsProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailsProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailsProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
