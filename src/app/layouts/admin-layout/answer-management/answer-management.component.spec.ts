import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerManagementComponent } from './answer-management.component';

describe('AnswerManagementComponent', () => {
  let component: AnswerManagementComponent;
  let fixture: ComponentFixture<AnswerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
