import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalListComponent } from './principal-list.component';

describe('PrincipalListComponent', () => {
  let component: PrincipalListComponent;
  let fixture: ComponentFixture<PrincipalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalListComponent]
    });
    fixture = TestBed.createComponent(PrincipalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
