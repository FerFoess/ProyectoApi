import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBooksComponent } from './principal-books.component';

describe('PrincipalBooksComponent', () => {
  let component: PrincipalBooksComponent;
  let fixture: ComponentFixture<PrincipalBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalBooksComponent]
    });
    fixture = TestBed.createComponent(PrincipalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
