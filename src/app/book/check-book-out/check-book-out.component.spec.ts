import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookOutComponent } from './check-book-out.component';

describe('CheckBookOutComponent', () => {
  let component: CheckBookOutComponent;
  let fixture: ComponentFixture<CheckBookOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBookOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBookOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
