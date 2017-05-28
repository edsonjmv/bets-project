import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddCreatorComponent } from './odd-creator.component';

describe('OddCreatorComponent', () => {
  let component: OddCreatorComponent;
  let fixture: ComponentFixture<OddCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
