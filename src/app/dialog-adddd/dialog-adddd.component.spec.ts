import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddddComponent } from './dialog-adddd.component';

describe('DialogAddddComponent', () => {
  let component: DialogAddddComponent;
  let fixture: ComponentFixture<DialogAddddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
