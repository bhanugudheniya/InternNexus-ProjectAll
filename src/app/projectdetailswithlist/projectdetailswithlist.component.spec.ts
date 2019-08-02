import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailswithlistComponent } from './projectdetailswithlist.component';

describe('ProjectdetailswithlistComponent', () => {
  let component: ProjectdetailswithlistComponent;
  let fixture: ComponentFixture<ProjectdetailswithlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailswithlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailswithlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
