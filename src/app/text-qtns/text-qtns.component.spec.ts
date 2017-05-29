import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQtnsComponent } from './text-qtns.component';

describe('TextQtnsComponent', () => {
  let component: TextQtnsComponent;
  let fixture: ComponentFixture<TextQtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextQtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
