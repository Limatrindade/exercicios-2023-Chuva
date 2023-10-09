import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResumoComponent } from './main-resumo.component';

describe('MainResumoComponent', () => {
  let component: MainResumoComponent;
  let fixture: ComponentFixture<MainResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainResumoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
