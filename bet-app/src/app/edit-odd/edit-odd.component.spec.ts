import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOddComponent } from './edit-odd.component';

describe('EditOddComponent', () => {
  let component: EditOddComponent;
  let fixture: ComponentFixture<EditOddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
