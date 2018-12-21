import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAwsomeComponent } from './create-awsome.component';

describe('CreateAwsomeComponent', () => {
  let component: CreateAwsomeComponent;
  let fixture: ComponentFixture<CreateAwsomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAwsomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAwsomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
