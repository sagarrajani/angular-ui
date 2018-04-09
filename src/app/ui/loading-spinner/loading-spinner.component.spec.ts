import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('load before items', () => {
    let items = [];

    items.push({ id: 1, name: 'Hans' });
    items.push({ id: 2, name: 'Franz' });
    items.push({ id: 3, name: 'Kurt' });
    items.push({ id: 4, name: 'Gustav' });
    
    expect(component).toHaveBeenCalled;
  });
});
