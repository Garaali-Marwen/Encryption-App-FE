import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404errorComponent } from './page404error.component';

describe('Page404errorComponent', () => {
  let component: Page404errorComponent;
  let fixture: ComponentFixture<Page404errorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page404errorComponent]
    });
    fixture = TestBed.createComponent(Page404errorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
