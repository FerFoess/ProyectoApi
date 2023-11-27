import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalItemComponent } from './principal-item.component';

describe('PrincipalItemComponent', () => {
  let component: PrincipalItemComponent;
  let fixture: ComponentFixture<PrincipalItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalItemComponent]
    });
    fixture = TestBed.createComponent(PrincipalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
