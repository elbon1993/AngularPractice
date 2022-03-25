import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRestClientComponentComponent } from './http-rest-client-component.component';

describe('HttpRestClientComponentComponent', () => {
  let component: HttpRestClientComponentComponent;
  let fixture: ComponentFixture<HttpRestClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpRestClientComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRestClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
