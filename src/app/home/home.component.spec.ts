import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call clicked() and alert should be displayed', () => {
fixture = TestBed.createComponent(HomeComponent);
/*component.clicked();
expect(alert).toHaveBeenCalledWith('Button Cliked');*/
component = fixture.componentInstance;
expect(alert).toHaveBeenCalledWith('Button Cliked');
});
});
