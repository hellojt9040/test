import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetNonCanadianProfileComponent } from './set-non-canadian-profile.component';

describe('SetNonCanadianProfileComponent', () => {
  let component: SetNonCanadianProfileComponent;
  let fixture: ComponentFixture<SetNonCanadianProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNonCanadianProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetNonCanadianProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
