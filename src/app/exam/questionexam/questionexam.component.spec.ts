import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionexamComponent } from './questionexam.component';

describe('QuestionexamComponent', () => {
  let component: QuestionexamComponent;
  let fixture: ComponentFixture<QuestionexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
