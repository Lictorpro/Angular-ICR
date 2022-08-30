import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitDialogComponent } from './exhibit-dialog.component';

describe('ExhibitDialogComponent', () => {
  let component: ExhibitDialogComponent;
  let fixture: ComponentFixture<ExhibitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
