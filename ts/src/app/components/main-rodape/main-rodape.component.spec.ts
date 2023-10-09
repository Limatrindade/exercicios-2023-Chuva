import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRodapeComponent } from './main-rodape.component';

describe('MainRodapeComponent', () => {
  let component: MainRodapeComponent;
  let fixture: ComponentFixture<MainRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRodapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
