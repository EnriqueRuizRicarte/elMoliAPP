import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoListComponent } from './evento-list.component';

describe('EventoListComponent', () => {
  let component: EventoListComponent;
  let fixture: ComponentFixture<EventoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
