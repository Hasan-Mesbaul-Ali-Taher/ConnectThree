import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3Component } from './level3.component';

describe('Level3Component', () => {
  let component: Level3Component;
  let fixture: ComponentFixture<Level3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level3Component]
    });
    fixture = TestBed.createComponent(Level3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
