import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeUniqueComponent } from './employee-unique.component';

describe('EmployeeUniqueComponent', () => {
  let component: EmployeeUniqueComponent;
  let fixture: ComponentFixture<EmployeeUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeUniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
