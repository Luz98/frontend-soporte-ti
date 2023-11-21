import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInventoryComponent } from './check-inventory.component';

describe('CheckInventoryComponent', () => {
  let component: CheckInventoryComponent;
  let fixture: ComponentFixture<CheckInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckInventoryComponent]
    });
    fixture = TestBed.createComponent(CheckInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
