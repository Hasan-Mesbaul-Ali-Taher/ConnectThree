import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level5Component } from './level5.component';

describe('Level5Component', () => {
  let component: Level5Component;
  let fixture: ComponentFixture<Level5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level5Component]
    });
    fixture = TestBed.createComponent(Level5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
