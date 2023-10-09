import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetalhesComponent } from './main-detalhes.component';

describe('MainDetalhesComponent', () => {
  let component: MainDetalhesComponent;
  let fixture: ComponentFixture<MainDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
