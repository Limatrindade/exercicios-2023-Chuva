import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDiscussoesComponent } from './main-discussoes.component';

describe('MainDiscussoesComponent', () => {
  let component: MainDiscussoesComponent;
  let fixture: ComponentFixture<MainDiscussoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDiscussoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDiscussoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
