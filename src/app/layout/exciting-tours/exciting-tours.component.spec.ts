import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcitingToursComponent } from './exciting-tours.component';

describe('ExcitingToursComponent', () => {
  let component: ExcitingToursComponent;
  let fixture: ComponentFixture<ExcitingToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcitingToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcitingToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
