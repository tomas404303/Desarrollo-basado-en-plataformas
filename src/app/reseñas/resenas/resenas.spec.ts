import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resenas } from './resenas';

describe('Resenas', () => {
  let component: Resenas;
  let fixture: ComponentFixture<Resenas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resenas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resenas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
