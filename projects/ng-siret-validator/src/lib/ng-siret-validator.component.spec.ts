import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSiretValidatorComponent } from './ng-siret-validator.component';

describe('NgSiretValidatorComponent', () => {
  let component: NgSiretValidatorComponent;
  let fixture: ComponentFixture<NgSiretValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSiretValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSiretValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
