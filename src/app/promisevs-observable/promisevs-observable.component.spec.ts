import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisevsObservableComponent } from './promisevs-observable.component';

describe('PromisevsObservableComponent', () => {
  let component: PromisevsObservableComponent;
  let fixture: ComponentFixture<PromisevsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisevsObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisevsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
