import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExhibitionComponent } from './single-exhibition.component';

describe('SingleExhibitionComponent', () => {
  let component: SingleExhibitionComponent;
  let fixture: ComponentFixture<SingleExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
