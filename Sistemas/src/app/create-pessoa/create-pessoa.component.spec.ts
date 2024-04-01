import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePessoaComponent } from './create-pessoa.component';

describe('CreatePessoaComponent', () => {
  let component: CreatePessoaComponent;
  let fixture: ComponentFixture<CreatePessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePessoaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
