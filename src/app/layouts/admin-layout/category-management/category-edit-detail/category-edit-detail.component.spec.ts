import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditDetailComponent } from './category-edit-detail.component';

describe('CategoryEditDetailComponent', () => {
  let component: CategoryEditDetailComponent;
  let fixture: ComponentFixture<CategoryEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
