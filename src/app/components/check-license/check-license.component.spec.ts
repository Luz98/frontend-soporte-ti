import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckLicenseComponent } from './check-license.component';

describe('CheckLicenseComponent', () => {
  let component: CheckLicenseComponent;
  let fixture: ComponentFixture<CheckLicenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckLicenseComponent]
    });
    fixture = TestBed.createComponent(CheckLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
