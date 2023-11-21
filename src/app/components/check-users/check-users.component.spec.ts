import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUsersComponent } from './check-users.component';

describe('CheckUsersComponent', () => {
  let component: CheckUsersComponent;
  let fixture: ComponentFixture<CheckUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckUsersComponent]
    });
    fixture = TestBed.createComponent(CheckUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
