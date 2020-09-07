import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutFormComponent } from './produt-form.component';

describe('ProdutFormComponent', () => {
  let component: ProdutFormComponent;
  let fixture: ComponentFixture<ProdutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
