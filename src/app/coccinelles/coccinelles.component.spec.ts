import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoccinellesComponent } from './coccinelles.component';

describe('CoccinellesComponent', () => {
  let component: CoccinellesComponent;
  let fixture: ComponentFixture<CoccinellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoccinellesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoccinellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
