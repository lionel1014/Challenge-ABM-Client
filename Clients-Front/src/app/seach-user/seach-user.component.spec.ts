import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachUserComponent } from './seach-user.component';

describe('SeachUserComponent', () => {
  let component: SeachUserComponent;
  let fixture: ComponentFixture<SeachUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
