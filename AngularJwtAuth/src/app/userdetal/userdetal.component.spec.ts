import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetalComponent } from './userdetal.component';

describe('UserdetalComponent', () => {
  let component: UserdetalComponent;
  let fixture: ComponentFixture<UserdetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
