import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterTestingResultComponent } from './unregister-testing-result.component';

describe('UnregisterTestingResultComponent', () => {
  let component: UnregisterTestingResultComponent;
  let fixture: ComponentFixture<UnregisterTestingResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisterTestingResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisterTestingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
