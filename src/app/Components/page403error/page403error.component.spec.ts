import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page403errorComponent } from './page403error.component';

describe('Page403errorComponent', () => {
  let component: Page403errorComponent;
  let fixture: ComponentFixture<Page403errorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page403errorComponent]
    });
    fixture = TestBed.createComponent(Page403errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
